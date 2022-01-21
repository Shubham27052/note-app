// import React from "react";

// const NotesShort = ({
//   isid,
//   istitle,
//   istext,
//   isLastModified,
//   DeleteNote,
//   activeId,
//   setActiveId,
// }) => {
//   return (
//     <div
//       className={
//         isid === activeId
//           ? "notes-short-container active"
//           : "notes-short-container"
//       }
//       key={isid}
//       onClick={() => {
//         setActiveId(isid);
//       }}
//     >
//       <div className="notes-short-title">
//         <h4>{istitle}</h4>
//         <button
//           onClick={() => {
//             DeleteNote(isid);
//           }}
//         >
//           Delete
//         </button>
//       </div>
//       <p>{istext.slice(0, 15)}...</p>
//       <span>
//         Last Modified{" "}
//         {new Date(isLastModified).toLocaleDateString("en-GB", {
//           hour: "2-digit",
//           minute: "2-digit",
//         })}
//       </span>
//     </div>
//   );
// };

// export default NotesShort;
