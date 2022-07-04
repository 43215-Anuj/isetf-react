import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./member.scss";
import { Container, Row } from "reactstrap";

function SingleMember(props) {
  const [memberInfo, setMemberInfo] = useState();
  let { id } = useParams();

  useEffect(() => {
    const mem = props.data.filter((member) => id === member.id);
    setMemberInfo(mem[0]);
  }, [id, setMemberInfo, props]);

  return (
    <section>
      <Container>
        {memberInfo ? (
          <>
            <Row className="heading">
              <h3>{memberInfo.name}</h3>
            </Row>
            <figure className="figure">
              <img
                src={
                  require(`../../../assets/img/members/${memberInfo.imgSrc}.jpg`)
                    .default
                }
                alt={memberInfo.name}
              />
              <figcaption>{memberInfo.desg}</figcaption>
            </figure>

            {memberInfo.desc.map((para, i) => (
              <p className="description" key={i}>
                {para}
              </p>
            ))}
            <ul>
              {memberInfo.links &&
                memberInfo.links.map((link, i) => (
                  <li className="link" key={i}>
                    <a href={link} target="_blank" rel="noreferrer">
                      {link}
                    </a>
                  </li>
                ))}
            </ul>
          </>
        ) : (
          <p>...Loading</p>
        )}
      </Container>
    </section>
  );
}

export default SingleMember;
