import React, {useState} from 'react'
import emailjs from 'emailjs-com';
import { Alert, Button } from 'reactstrap';
import './Form.scss';

const Form = () => {
    const [ userDetails, setUserDetails ] = useState({ 
        from_name: "",
        from_email: "", 
        subject: "",
        message: ""
    })
    const [ isSuccess, setIsSuccess ] = useState(false);
    const [ isFail, setIsFail ] = useState(false);

    function clear() {
        setUserDetails ({
            from_name: "",
            from_email: "", 
            subject: "",
            message: ""
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_9qoxos9', 
                        'template_wwz006s', 
                            e.target, 
                        'user_VhAeeFq5TIaJ9rwoKLDvE')
          .then((result) => {
              console.log(result)
              setIsSuccess(true)
          }, (error) => {
              setIsFail(true)
          });
        clear()
    }

    const handleChange = (e, field) => {
        setUserDetails({
            ...userDetails,  
            [field] : e.target.value
        })
    }

    const onDismiss = () => {
        setIsSuccess(false)
        setIsFail(false)
    }

    return (
            <div className="my-mail-form-component details">
                <div className="alert-wrapper">
                    <Alert color="success" isOpen={isSuccess} toggle={onDismiss}>
                        The mail has been sent successfully
                    </Alert>
                    <Alert color="danger" isOpen={isFail} toggle={onDismiss}>
                        Error occured! Please try again
                    </Alert>
                </div>
                <h3>Send us a Mail</h3>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor="name">NAME :
                        <input id="name" type="text" placeholder="Your name"
                            name="from_name" value={userDetails.from_name} 
                            onChange={(e) => handleChange(e, "from_name")} required />
                    </label>
                    <label htmlFor="email">EMAIL : 
                        <input id="email" type="email" placeholder="Your email"
                            name="from_email" value={userDetails.from_email} 
                            onChange={(e) => handleChange(e, "from_email")} required />
                    </label>
                    <label htmlFor="subject">SUBJECT :
                        <input id="subject" type="text" placeholder="Subject"
                            name="subject" value={userDetails.subject} 
                            onChange={(e) => handleChange(e, "subject")} required />
                    </label>
                    <label htmlFor="message">
                        <textarea id="message" rows="5" cols="50" placeholder="Your message" name="message" value={userDetails.message} 
                        onChange={(e) => handleChange(e, "message")} required />
                    </label>
                    <Button color="success" type="submit">SEND</Button>
                </form>  
            </div>
    )
}

export default Form
