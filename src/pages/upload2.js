import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";

import PublitioAPI from "publitio_js_sdk";
const UploadComponent = () => {
	const [thumbnal, setThumbnal] = useState("/images/180.png");
	const [signatureImg, setSignatureImg] = useState("/images/150x40.png");
	const [profilePicture, setProfilePicture] = useState(null);
	const [signature, setSignature] = useState(null);
	const [categoryCertificate, setCategoryCertificate] = useState(null);
	const [domicileCertificate, setDomicileCertificate] = useState(null);
	const [tenthCertificate, setTenthCertificate] = useState(null);
	const [twelfthCertificate, setTwelfthCertificate] = useState(null);
	const [graduationCertificate, setGraduationCertificate] = useState(null);
	const [uploadedProfilePictureUrl, setUploadedProfilePictureUrl] =
		useState(null);
	const [uploadedSignatureUrl, setUploadedSignatureUrl] = useState(null);
	const [uploadedCategoryCertificateUrl, setUploadedCategoryCertificateUrl] =
		useState(null);
	const [uploadedDomicileCertificateUrl, setUploadedDomicileCertificateUrl] =
		useState(null);
	const [uploadedTenthCertificateUrl, setUploadedTenthCertificateUrl] =
		useState(null);
	const [uploadedTwelfthCertificateUrl, setUploadedTwelfthCertificateUrl] =
		useState(null);
	const [
		uploadedGraduationCertificateUrl,
		setUploadedGraduationCertificateUrl,
	] = useState(null);

	const handleFileChange = (event, setFileState) => {
		const file = event.target.files[0];
		if (file && file.size <= 10 * 1024 * 1024) {
			setFileState(file);
		} else {
			setFileState(null);
			console.log("File size exceeds the limit (10MB).");
		}
	};

	const handleProfilePictureChange = (event) => {
		setThumbnal(URL.createObjectURL(event.target.files[0]));
		handleFileChange(event, setProfilePicture);
	};

	const handleSignatureChange = (event) => {
		setSignatureImg(URL.createObjectURL(event.target.files[0]));
		handleFileChange(event, setSignature);
	};

	const handleCategoryCertificateChange = (event) => {
		handleFileChange(event, setCategoryCertificate);
	};

	const handleDomicileCertificateChange = (event) => {
		handleFileChange(event, setDomicileCertificate);
	};

	const handleTenthCertificateChange = (event) => {
		handleFileChange(event, setTenthCertificate);
	};

	const handleTwelfthCertificateChange = (event) => {
		handleFileChange(event, setTwelfthCertificate);
	};

	const handleGraduationCertificateChange = (event) => {
		handleFileChange(event, setGraduationCertificate);
	};

	const uploadFile = (file, setUploadedUrlState) => {
		const publitio = new PublitioAPI(
			"Gab28ewSXjhvtk0NVlZa",
			"1hcvZ0tpa6tSg75x17B2Rqqn8XGQLhDn"
		);
		const api_url = publitio.uploadUrlSigned();

		const formData = new FormData();
		formData.append("file", file);

		return axios
			.post(api_url, formData, {
				headers: {
					Accept: "application/json",
					"Content-Type": "multipart/form-data",
				},
			})
			.then((response) => {
				const url = response.data.url_download;
				console.log(response.data);
				setUploadedUrlState(url);
				//setUploadedUrls((prevUrls) => [...prevUrls, url]);
				return url;
			})
			.catch((error) => {
				console.error(error);
				// Handle the error
				throw error;
			});
	};

	const handleFileUpload = () => {
		const uploadPromises = [];

		if (profilePicture) {
			uploadPromises.push(
				uploadFile(profilePicture, setUploadedProfilePictureUrl)
			);
		}
		if (signature) {
			uploadPromises.push(uploadFile(signature, setUploadedSignatureUrl));
		}
		if (categoryCertificate) {
			uploadPromises.push(
				uploadFile(categoryCertificate, setUploadedCategoryCertificateUrl)
			);
		}
		if (domicileCertificate) {
			uploadPromises.push(
				uploadFile(domicileCertificate, setUploadedDomicileCertificateUrl)
			);
		}
		if (tenthCertificate) {
			uploadPromises.push(
				uploadFile(tenthCertificate, setUploadedTenthCertificateUrl)
			);
		}
		if (twelfthCertificate) {
			uploadPromises.push(
				uploadFile(twelfthCertificate, setUploadedTwelfthCertificateUrl)
			);
		}
		if (graduationCertificate) {
			uploadPromises.push(
				uploadFile(graduationCertificate, setUploadedGraduationCertificateUrl)
			);
		}

		Promise.all(uploadPromises)
			.then(() => {
				console.log("All files uploaded successfully");
				// Handle success
			})
			.catch((error) => {
				console.error("Error uploading files:", error);
				// Handle error
			});
	};

	return (
		<div>
			<div>
				<label htmlFor="profilePicture">Profile Picture (Max 10MB):</label>
				<Image
					id="imagePreview"
					className="photograph"
					src={thumbnal}
					width="180"
					height="180"
					alt="Preview Image"
				/>
				<input
					type="file"
					id="profilePicture"
					accept="image/*"
					onChange={handleProfilePictureChange}
				/>
			</div>
			<div>
				<label htmlFor="signature">Signature (Max 10MB):</label>

				<Image
					id="imagePreview"
					className="photograph"
					src={signatureImg}
					width="150"
					height="40"
					alt="Preview Image"
				/>
				<input
					type="file"
					id="signature"
					accept="image/*"
					onChange={handleSignatureChange}
				/>
			</div>
			<div>
				<label htmlFor="categoryCertificate">
					Category Certificate (Max 10MB):
				</label>
				<input
					type="file"
					id="categoryCertificate"
					accept=".pdf"
					onChange={handleCategoryCertificateChange}
				/>
			</div>
			<div>
				<label htmlFor="domicileCertificate">
					Domicile Certificate (Max 10MB):
				</label>
				<input
					type="file"
					id="domicileCertificate"
					accept=".pdf"
					onChange={handleDomicileCertificateChange}
				/>
			</div>
			<div>
				<label htmlFor="tenthCertificate">Tenth Certificate (Max 10MB):</label>
				<input
					type="file"
					id="tenthCertificate"
					accept=".pdf"
					onChange={handleTenthCertificateChange}
				/>
			</div>
			<div>
				<label htmlFor="twelfthCertificate">
					Twelfth Certificate (Max 10MB):
				</label>
				<input
					type="file"
					id="twelfthCertificate"
					accept=".pdf"
					onChange={handleTwelfthCertificateChange}
				/>
			</div>
			<div>
				<label htmlFor="graduationCertificate">
					Graduation Certificate (Max 10MB):
				</label>
				<input
					type="file"
					id="graduationCertificate"
					accept=".pdf"
					onChange={handleGraduationCertificateChange}
				/>
			</div>
			<button onClick={handleFileUpload}>Upload</button>

			<h3>Uploaded URLs:</h3>
			<ul>
				{uploadedProfilePictureUrl && (
					<li>Profile Picture: {uploadedProfilePictureUrl}</li>
				)}
				{uploadedSignatureUrl && <li>Signature: {uploadedSignatureUrl}</li>}
				{uploadedCategoryCertificateUrl && (
					<li>Category Certificate: {uploadedCategoryCertificateUrl}</li>
				)}
				{uploadedDomicileCertificateUrl && (
					<li>Domicile Certificate: {uploadedDomicileCertificateUrl}</li>
				)}
				{uploadedTenthCertificateUrl && (
					<li>Tenth Certificate: {uploadedTenthCertificateUrl}</li>
				)}
				{uploadedTwelfthCertificateUrl && (
					<li>Twelfth Certificate: {uploadedTwelfthCertificateUrl}</li>
				)}
				{uploadedGraduationCertificateUrl && (
					<li>Graduation Certificate: {uploadedGraduationCertificateUrl}</li>
				)}
			</ul>
		</div>
	);
};

export default UploadComponent;
