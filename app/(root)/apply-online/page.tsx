// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import FormHeader from "@/Components/FormHeader";
// import FormField from "@/Components/FormField";
// import SubmitButton from "@/Components/SubmitButton";
// import ContactInfo from "@/Components/ContactInfo";
// import SocialLinks from "@/Components/SocialMediaLinks";
// import ProgressSteps from "@/Components/ProgessSteps";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       when: "beforeChildren",
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: "easeOut" },
//   },
// };

// export default function ApplyOnline() {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     phoneNumber: "",
//     email: "",
//     currentAddress: "",
//     academicQualification: "",
//     studyDestinations: [] as string[],
//     studyLevel: "",
//     englishTest: "",
//     passportStatus: "",
//     studyReason: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     const { name, value, type } = e.target;

//     if (type === "checkbox") {
//       const checked = (e.target as HTMLInputElement).checked;
//       const updatedDestinations = checked
//         ? [...formData.studyDestinations, value]
//         : formData.studyDestinations.filter((dest) => dest !== value);

//       setFormData({ ...formData, studyDestinations: updatedDestinations });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
//   const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

//   const validateForm = () => {
//     const requiredFields = [
//       formData.fullName,
//       formData.phoneNumber,
//       formData.email,
//       formData.currentAddress,
//       formData.academicQualification,
//       formData.studyLevel,
//       formData.englishTest,
//       formData.passportStatus,
//       formData.studyReason,
//     ];

//     if (requiredFields.some((field) => !field)) {
//       return false;
//     }

//     if (formData.studyDestinations.length === 0) {
//       return false;
//     }

//     return true;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       toast.error("Please fill in all required fields", {
//         position: "top-right",
//         autoClose: 3000,
//       });
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       const submissionData = {
//         fullName: formData.fullName,
//         phoneNumber: formData.phoneNumber,
//         email: formData.email,
//         currentAddress: formData.currentAddress,
//         academicQualification: formData.academicQualification,
//         studyDestinations: formData.studyDestinations,
//         studyLevel: formData.studyLevel,
//         englishTest: formData.englishTest,
//         passportStatus: formData.passportStatus,
//         studyReason: formData.studyReason,
//         status: "pending",
//       };

//       const response = await fetch("/api/forms", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(submissionData),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to submit form");
//       }

//       toast.success("Application submitted successfully!", {
//         position: "top-right",
//         autoClose: 3000,
//       });

//       setFormData({
//         fullName: "",
//         phoneNumber: "",
//         email: "",
//         currentAddress: "",
//         academicQualification: "",
//         studyDestinations: [],
//         studyLevel: "",
//         englishTest: "",
//         passportStatus: "",
//         studyReason: "",
//       });
//       setCurrentStep(1);
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       toast.error(
//         "There was an error submitting your application. Please try again.",
//         {
//           position: "top-right",
//           autoClose: 3000,
//         }
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen pt-20 bg-gradient-to-br from-[#F5F4F5] via-white to-[#B2ACCE]/20 py-12 px-4 sm:px-6 lg:px-8">
//       <ToastContainer />
      
//       <div className="max-w-4xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h1 className="text-4xl font-bold text-[#2C3C81] mb-4">
//             Apply Online
//           </h1>
//           <p className="text-lg text-[#2C3C81]/80 max-w-2xl mx-auto">
//             Begin your journey to studying abroad with our simple application process
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Column - Information */}
//           <motion.div 
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="lg:col-span-1"
//           >
//             <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#B2ACCE]/30">
//               <h3 className="text-xl font-semibold text-[#2C3C81] mb-4">Why Apply With Us?</h3>
//               <ul className="space-y-3">
//                 <li className="flex items-start">
//                   <div className="bg-[#D9F1F1] p-2 rounded-full mr-3">
//                     <svg className="w-4 h-4 text-[#2C3C81]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                     </svg>
//                   </div>
//                   <span className="text-[#2C3C81]">Expert guidance throughout the process</span>
//                 </li>
//                 <li className="flex items-start">
//                   <div className="bg-[#D9F1F1] p-2 rounded-full mr-3">
//                     <svg className="w-4 h-4 text-[#2C3C81]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                     </svg>
//                   </div>
//                   <span className="text-[#2C3C81]">Partnerships with top universities</span>
//                 </li>
//                 <li className="flex items-start">
//                   <div className="bg-[#D9F1F1] p-2 rounded-full mr-3">
//                     <svg className="w-4 h-4 text-[#2C3C81]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                     </svg>
//                   </div>
//                   <span className="text-[#2C3C81]">Visa application support</span>
//                 </li>
//                 <li className="flex items-start">
//                   <div className="bg-[#D9F1F1] p-2 rounded-full mr-3">
//                     <svg className="w-4 h-4 text-[#2C3C81]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                     </svg>
//                   </div>
//                   <span className="text-[#2C3C81]">Scholarship assistance</span>
//                 </li>
//               </ul>
              
//               <div className="mt-8">
//                 <ContactInfo />
//                 <div className="mt-6">
//                   <SocialLinks />
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Right Column - Form */}
//           <motion.div 
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="lg:col-span-2"
//           >
//             <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#B2ACCE]/30">
//               <div className="bg-[#2C3C81] p-4 text-white text-center">
//                 <h2 className="text-xl font-semibold">Application Form</h2>
//                 <p className="text-sm opacity-90">Complete all steps to submit your application</p>
//               </div>

//               <ProgressSteps currentStep={currentStep} />

//               <form onSubmit={handleSubmit} className="p-6 sm:p-8">
//                 {currentStep === 1 && (
//                   <motion.div
//                     initial="hidden"
//                     animate="visible"
//                     variants={containerVariants}
//                     className="space-y-6"
//                   >
//                     <motion.div variants={itemVariants}>
//                       <FormField
//                         label="Full Name"
//                         name="fullName"
//                         type="text"
//                         required
//                         value={formData.fullName}
//                         onChange={handleChange}
//                       />
//                     </motion.div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <motion.div variants={itemVariants}>
//                         <FormField
//                           label="Phone Number (include country code)"
//                           name="phoneNumber"
//                           type="tel"
//                           required
//                           value={formData.phoneNumber}
//                           onChange={handleChange}
//                         />
//                       </motion.div>

//                       <motion.div variants={itemVariants}>
//                         <FormField
//                           label="Email Address"
//                           name="email"
//                           type="email"
//                           required
//                           value={formData.email}
//                           onChange={handleChange}
//                         />
//                       </motion.div>
//                     </div>

//                     <motion.div variants={itemVariants}>
//                       <FormField
//                         label="Current Address (City/District)"
//                         name="currentAddress"
//                         type="text"
//                         required
//                         value={formData.currentAddress}
//                         onChange={handleChange}
//                       />
//                     </motion.div>
//                   </motion.div>
//                 )}

//                 {currentStep === 2 && (
//                   <motion.div
//                     initial="hidden"
//                     animate="visible"
//                     variants={containerVariants}
//                     className="space-y-6"
//                   >
//                     <motion.div variants={itemVariants}>
//                       <FormField
//                         label="Highest Academic Qualification"
//                         name="academicQualification"
//                         type="text"
//                         required
//                         value={formData.academicQualification}
//                         onChange={handleChange}
//                         placeholder="e.g., '+2 Science – GPA 3.1' / 'Bachelor's in BBA – 60%'"
//                       />
//                     </motion.div>

//                     <motion.div variants={itemVariants}>
//                       <label className="block text-sm font-medium text-[#2C3C81] mb-2">
//                         Preferred Study Destination(s) *
//                       </label>
//                       <motion.div
//                         className="grid grid-cols-2 sm:grid-cols-3 gap-3"
//                         variants={containerVariants}
//                       >
//                         {["UK", "Australia", "Canada", "USA", "New Zealand", "Other"].map(
//                           (country) => (
//                             <motion.div
//                               key={country}
//                               className="flex items-center"
//                               variants={itemVariants}
//                             >
//                               <motion.div
//                                 whileHover={{ scale: 1.05 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 className="flex items-center"
//                               >
//                                 <input
//                                   type="checkbox"
//                                   id={`dest-${country}`}
//                                   name="studyDestinations"
//                                   value={country}
//                                   checked={formData.studyDestinations.includes(
//                                     country
//                                   )}
//                                   onChange={handleChange}
//                                   className="h-4 w-4 text-[#2C3C81] focus:ring-[#2C3C81] border-gray-300 rounded"
//                                 />
//                                 <label
//                                   htmlFor={`dest-${country}`}
//                                   className="ml-2 block text-sm text-gray-700"
//                                 >
//                                   {country}
//                                 </label>
//                               </motion.div>
//                             </motion.div>
//                           )
//                         )}
//                       </motion.div>
//                     </motion.div>

//                     <motion.div variants={itemVariants}>
//                       <FormField
//                         label="Preferred Level of Study"
//                         name="studyLevel"
//                         type="select"
//                         required
//                         value={formData.studyLevel}
//                         onChange={handleChange}
//                         options={["", "Diploma", "Bachelor", "Master", "PhD", "Language Course"]}
//                       />
//                     </motion.div>
//                   </motion.div>
//                 )}

//                 {currentStep === 3 && (
//                   <motion.div
//                     initial="hidden"
//                     animate="visible"
//                     variants={containerVariants}
//                     className="space-y-6"
//                   >
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <motion.div variants={itemVariants}>
//                         <FormField
//                           label="Have you taken any English proficiency tests?"
//                           name="englishTest"
//                           type="select"
//                           required
//                           value={formData.englishTest}
//                           onChange={handleChange}
//                           options={["", "IELTS", "PTE", "TOEFL", "Others", "Not yet"]}
//                         />
//                       </motion.div>

//                       <motion.div variants={itemVariants}>
//                         <FormField
//                           label="Do you have a valid passport?"
//                           name="passportStatus"
//                           type="select"
//                           required
//                           value={formData.passportStatus}
//                           onChange={handleChange}
//                           options={["", "Yes", "No", "Applied"]}
//                         />
//                       </motion.div>
//                     </div>

//                     <motion.div variants={itemVariants}>
//                       <label
//                         htmlFor="studyReason"
//                         className="block text-sm font-medium text-[#2C3C81] mb-2"
//                       >
//                         Why do you want to study abroad? *
//                       </label>
//                       <motion.textarea
//                         id="studyReason"
//                         name="studyReason"
//                         rows={4}
//                         required
//                         value={formData.studyReason}
//                         onChange={handleChange}
//                         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2C3C81] focus:border-[#2C3C81] sm:text-sm"
//                         placeholder="Brief reason to understand goals/motivation"
//                         whileFocus={{
//                           scale: 1.01,
//                           boxShadow: "0 0 0 3px rgba(44, 60, 129, 0.2)",
//                         }}
//                       />
//                     </motion.div>
//                   </motion.div>
//                 )}

//                 <div className="mt-8 flex justify-between">
//                   {currentStep > 1 && (
//                     <motion.button
//                       type="button"
//                       onClick={prevStep}
//                       className="px-6 py-2 border border-[#2C3C81] text-[#2C3C81] rounded-md font-medium hover:bg-[#2C3C81]/10 transition-colors"
//                       whileHover={{ scale: 1.03 }}
//                       whileTap={{ scale: 0.97 }}
//                     >
//                       Back
//                     </motion.button>
//                   )}

//                   {currentStep < 3 ? (
//                     <motion.button
//                       type="button"
//                       onClick={nextStep}
//                       className="ml-auto px-6 py-2 bg-[#2C3C81] text-white rounded-md font-medium hover:bg-[#1E2A5A] transition-colors"
//                       whileHover={{ scale: 1.03 }}
//                       whileTap={{ scale: 0.97 }}
//                     >
//                       Next
//                     </motion.button>
//                   ) : (
//                     <motion.div
//                       className="ml-auto w-full max-w-xs"
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                     >
//                       <SubmitButton isSubmitting={isSubmitting} />
//                     </motion.div>
//                   )}
//                 </div>
//               </form>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }