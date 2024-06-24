import { Box, Center, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import MemberCard from "./MemberCard";

const members = [
  {
    name: "Katya Anco Bustillos",
    role: "Full Stack Developer",
    description:
      "Web developer with management experience thanks to an commercial engineering career. A graphic designer since 2019, and passionate about innovation and developing challenging technological projects. Strong logical thinker, fast learner, and detail-oriented. Looking for a position which allows for creation, ideation, questioning, learning and constant improvement",
    github: "https://github.com/katy089",
    linkedin: "https://www.linkedin.com/in/katya-anco/",
  },
];

export default function OurTeam() {
  return (
    <Box>
      <Center>
        <Heading
          as="h1"
          fontSize="3xl"
          fontWeight="bold"
          mb={4}
          mt="3rem"
          position={"relative"}
          _after={{
            content: "''",
            width: "full",
            height: "30%",
            position: "absolute",
            bottom: 0,
            left: 0,
            bg: "blue.200",
            zIndex: -1,
          }}
        >
          Meet the team
        </Heading>
      </Center>
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={{ base: 0, sm: 1, md: 10, lg: 10, xl: 10 }}
        p={4}
      >
        {members.map((member) => (
          <MemberCard
            key={member.name}
            name={member.name}
            description={member.description}
            url={member.image}
            github={member.github}
            linkedin={member.linkedin}
            role={member.role}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
