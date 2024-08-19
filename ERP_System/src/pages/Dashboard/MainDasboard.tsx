// // src/components/MainComponent.tsx
// import React, { useEffect, useState } from 'react';
// // import BuggetTable from './BuggetTable';
// // import CircularsTable from './CircularsTable';
// // import PaymentStaffTable from './PaymentStaffTable';
// import StaffTable from './StaffTable';


// const MainDasboard: React.FC = () => {
//   const [data, setData] = useState<any>(null);

//   useEffect(() => {
//     fetch('http://localhost:3000/')
//       .then(response => response.json())
//       .then(jsonData => setData(jsonData))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   if (!data) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="main-component">
//       {/* <BuggetTable data={data.partOneData} />
//       <CircularsTable data={data.partTwoData} />
//       <PaymentStaffTable data={data.partThreeData} /> */}
//       <StaffTable data={data.partFourData} />
//     </div>
//   );
// };

// export default MainDasboard;
