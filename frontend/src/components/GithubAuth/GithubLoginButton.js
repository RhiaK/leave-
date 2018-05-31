import React from "react";
import GitHubLogin from "react-github-login";

const GithubLoginButton = props => {
  const onSuccess = response => {
    console.log(response);
    props.sendGithubCode(response);
  };
  const onFailure = response => console.error(response);
  return (
    <GitHubLogin
      clientId="7b27ccf25e6c05244b8c"
      onSuccess={onSuccess}
      onFailure={onFailure}
      redirectUri=""
      buttonText="Login with Github"
      className="fa fa-github btn btn-primary"
    />
  );
};

export default GithubLoginButton;
