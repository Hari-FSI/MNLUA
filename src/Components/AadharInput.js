import React, { useState } from "react";

const PasswordInput = ({ setAadhar }) => {
	const [password, setPassword] = useState("");
	const [showDigits, setShowDigits] = useState(false);

	const handlePasswordChange = (index, event) => {
		const inputPassword = event.target.value;
		const updatedPassword =
			password.substring(0, index) +
			inputPassword +
			password.substring(index + 1);
		setPassword(updatedPassword);
		setAadhar(updatedPassword);
	};

	const handleShowDigits = () => {
		setShowDigits(!showDigits);
	};

	return (
		<>
			{" "}
			<style jsx>
				{`
					.password-container {
						display: flex;
					}

					input[type="password"] {
						width: 40px;
						height: 40px;
						text-align: center;
						margin: 5px;
						font-size: 20px;
						border: 1px solid #ccc;
						border-radius: 5px;
					}

					.password-container {
						display: flex;
					}

					input[type="password"],
					input[type="text"].show {
						width: 40px;
						height: 40px;
						text-align: center;
						margin: 5px;
						font-size: 20px;
						border: 1px solid #ccc;
						border-radius: 5px;
					}
				`}
			</style>{" "}
			<span
				onClick={handleShowDigits}
				toggle=".password-field"
				className="fa fa-fw fa-eye field-icon toggle-password"></span>
			<div className="password-container">
				{Array.from({ length: 12 }, (_, index) => (
					<input
						key={index}
						type={showDigits ? "text" : "password"}
						value={password[index] || ""}
						onChange={(event) => handlePasswordChange(index, event)}
						maxLength={1}
						className={showDigits ? "show" : ""}
					/>
				))}
			</div>
			{/* 	<p>Password: {showDigits ? password : "*".repeat(password.length)}</p> */}
			{/* <button onClick={handleShowDigits}>
				{showDigits ? "Hide" : "Show"} Digits
			</button> */}
		</>
	);
};

export default PasswordInput;
