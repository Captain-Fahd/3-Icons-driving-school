import {Box, Flex, Image, Link} from "@chakra-ui/react"
import Pages from "@/components/Navbar/Pages";



const Navbar = () => {
    return (
    <Flex
        flexDirection="horizontal"
        padding={"1em"}
        width={"100%"}
        justifyContent={"space-evenly"}
    >
        <Image src="/logo_small.png" alt={"3 Icons driving school logo"}/>
        <Pages />
        <Flex backgroundColor={"#054c19"} borderRadius={"3em"} width={"7%"} minW={"5vw"} justifyContent={"center"} alignItems={"center"}>
            <Link href="/book" color={"white"} fontWeight={"bold"}>Book Now</Link>
        </Flex>
    </Flex>
    )
}
export default Navbar;