import React, { useContext, useEffect } from "react";
import { FiLogOut, FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router";
import NavBar from "../../components/NavBar";
import { SelectedUserContext } from "../../context/SelectedUserContext";
import { UserContext } from "../../context/UserContext";
import { Avatar, Container, Header, Infos, Bio, About } from "./styles";
import { animate } from "animejs";

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const { selectedUser, setSelectedUser } = useContext(SelectedUserContext);
  const { push } = useHistory();

  const LogOut = () => {
    setUser(false);
    push("/");
    localStorage.clear();
  };

  const handleGoBack = () => {
    setSelectedUser(false);
  };

  const Save = () => {
    setSelectedUser(false);
    setUser(selectedUser);
    push("/home");
  };

  useEffect(() => {
    animate("#counter", {
      translateY: 35,
      duration: 3000,
      alternate: true,
      ease: "outBounce",
    });

    animate("#counter-label", {
      translateY: -35,
      duration: 3000,
      alternate: true,
      ease: "outBounce",
    });

    animate("#svg", {
      translateX: [-10, 0],
      scale: [1, 1.1, 1],
      duration: 500,
      easing: "easeOutElastic(1, .6)",
    });
  }, []);

  return (
    <>
      <Container>
        <Header>
          <nav className={selectedUser ? "" : "twoItems"}>
            {selectedUser && (
              <FiArrowLeft
                className="goBack"
                size={22}
                onClick={() => handleGoBack()}
              />
            )}
            <div>#{selectedUser ? selectedUser.login : user.login}</div>
            <button
              onClick={() => {
                selectedUser ? Save() : LogOut();
              }}
            >
              {selectedUser ? "Salvar" : "Sair"}
              <FiLogOut
                id="svg"
                size={19}
                color={selectedUser ? "#5CBC29" : "#D03434"}
              />
            </button>
          </nav>
          <Avatar
            src={selectedUser ? selectedUser.avatar_url : user.avatar_url}
            className="animate__animated animate__flip animate__slower "
          />
        </Header>
        <About>
          <h3>
            {selectedUser
              ? selectedUser.name
                ? selectedUser.name.toUpperCase()
                : "Sem nome".toUpperCase()
              : user.name
              ? user.name.toUpperCase()
              : "Sem nome".toUpperCase()}
          </h3>
          <p>
            {selectedUser
              ? selectedUser.email
                ? selectedUser.email
                : "Email privado"
              : user.email
              ? user.email
              : "Email privado"}
          </p>
          <p>
            {selectedUser
              ? selectedUser.location
                ? selectedUser.location
                : "Sem localização"
              : user.location
              ? user.location
              : "Sem localização"}
          </p>
        </About>
        <Infos>
          <div
            onClick={() => {
              !selectedUser ? push("/followers") : null;
            }}
          >
            <h2 id="counter">
              {selectedUser ? selectedUser.followers : user.followers}
            </h2>
            <span id="counter-label">Seguidores</span>
          </div>
          <div
            onClick={() => {
              !selectedUser ? push("/following") : null;
            }}
          >
            <h2 id="counter">
              {selectedUser ? selectedUser.following : user.following}
            </h2>
            <span id="counter-label">Seguindo</span>
          </div>
          <div
            onClick={() => {
              !selectedUser ? push("/repositories") : null;
            }}
          >
            <h2 id="counter">
              {selectedUser ? selectedUser.public_repos : user.public_repos}
            </h2>
            <span id="counter-label">Repos</span>
          </div>
        </Infos>
        <Bio>
          <h3>Bio</h3>
          <p>{selectedUser ? selectedUser.bio : user.bio}</p>
          <p>
            {selectedUser
              ? selectedUser.bio
                ? selectedUser.bio
                : "Não possui bio!"
              : user.bio
              ? user.bio
              : "Não possui bio!"}
          </p>
        </Bio>
      </Container>
      <NavBar />
    </>
  );
};

export default Home;
