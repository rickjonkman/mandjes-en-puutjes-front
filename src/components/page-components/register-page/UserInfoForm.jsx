const UserInfoForm = ({
                          emailValue,
                          passwordValue,
                          firstnameValue,
                          handleOnChangeUsername,
                          handleOnChangePassword,
                          handleOnChangeFirstname
                      }) => {


    return (
        <div className="register-user__form--user-info">

            <label htmlFor="register-user__email"><span>Gebruikersnaam:</span>
                <input
                    type="email"
                    id="register-user__email"
                    name="username"
                    value={emailValue}
                    onChange={handleOnChangeUsername}
                />
            </label>

            <label htmlFor="register-user__password">
                <span>Wachtwoord:</span>
                <input
                    type="password"
                    id="register-user__password"
                    name="password"
                    value={passwordValue}
                    onChange={handleOnChangePassword}
                />
            </label>

            <label htmlFor="register-user__firstname">
                <span>Voornaam:</span>
                <input
                    type="text"
                    id="register-user__firstname"
                    name="firstname"
                    value={firstnameValue}
                    onChange={handleOnChangeFirstname}
                />
            </label>

        </div>
    );
};

export default UserInfoForm;