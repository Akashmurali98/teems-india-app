// import React from "react";
// import { dataUsers } from "./Data";
// import { getComponentByType } from "./getComponentByType";
// import { useForm, FormProvider } from "react-hook-form";

// const Demo = () => {
//   const nestedInputs = useForm();
//   const onSubmit = (data) => {
//     console.log(data);
//   };
//   // const password = watch("password");

//   return (
//     <>
//       <FormProvider {...nestedInputs}>
//         <form onSubmit={nestedInputs.handleSubmit(onSubmit)}>
//           {dataUsers.map((field, index) => {
//             return <div key={index}>{getComponentByType(field)}</div>;
//           })}
//           <button className="createUser-btn" type="submit">
//             Submit
//           </button>{" "}
//         </form>
//       </FormProvider>
//     </>
//   );
// };

// export default Demo;
