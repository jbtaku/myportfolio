// import { FaHome, FaInfo, FaProductHunt } from "react-icons/fa"
// import { GiSkills } from "react-icons/gi"
// import { Flex, Table, TableContainer, Th, Thead, Tr } from "@chakra-ui/react";
// import AnchorLink from "react-anchor-link-smooth-scroll";


// function Header() {
//     const items = [
//         { id: "Home", icon: <FaHome /> },
//         { id: "About", icon: <FaInfo /> },
//         { id: "Skills", icon: <GiSkills /> },
//         { id: "Products", icon: <FaProductHunt /> }
//     ]

//     return (
//             <TableContainer position={"fixed"}  inset={0} m={"auto"} w={"92vw"} h={"10vh"}>
//                 <Table>
//                     <Thead>
//                         <Tr bg="gray.100">
//                             {items.map((item) => (
//                                 <Th key={item.id} fontSize={20} borderWidth="3px" borderColor="gray.400">
//                                     <AnchorLink offset={40} href={"#" + item.id}><Flex>{item.icon}&nbsp;{item.id}</Flex></AnchorLink>
//                                 </Th>))}
//                         </Tr>
//                     </Thead>
//                 </Table>
//             </TableContainer>
//     )
// }

// export default Header