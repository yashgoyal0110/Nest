import { Box, Button, Link, Text, VStack, SimpleGrid } from '@chakra-ui/react';
import { Collapse } from '@chakra-ui/transition';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useCallback } from 'react';
import { Section } from 'types/section';
import { footerSections } from 'utils/constants';

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = useCallback((title: string) => {
    setOpenSection((prev) => (prev === title ? null : title));
  }, []);

  return (
    <Box
      as="footer"
      mt="auto"
      w="full"
      borderTopWidth="1px"
      bg="#E2E8F0" // Light mode: slate-200
      _dark={{ bg: '#1E293B' }} // Dark mode: slate-800
    >
      <Box
        w="full"
        maxW="container.xl"
        mx="auto"
        px={4}
        py={{ base: 4, md: 8 }}
        color="#1E293B" // Light mode text: slate-800
        _dark={{ color: '#E2E8F0' }} // Dark mode text: slate-200
      >
        {/* SimpleGrid with centered items */}
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          // gap={{ base: 4, sm: 8, md: 8 }}
          rowGap={{ base: 4, sm: 24, md: 8  }}
          columnGap={{ base: 4, sm: 8, md: 8  }}
          justifyItems="center"
          // alignItems={'center'}
        >
          {footerSections.map((section: Section) => (
            <Box key={section.title}>
              <Button
                onClick={() => toggleSection(section.title)}
                w="full"
                justifyContent="center"
                fontSize="lg"
                fontWeight="semibold"
                variant="ghost"
                aria-expanded={openSection === section.title}
                aria-controls={`footer-section-${section.title}`}
                _focus={{ outline: 'none' }}
                display="flex"
                alignItems="center"
              >
                <Text as="h3">{section.title}</Text>
                <Box
                  as="span"
                  display={{ base: 'block', lg: 'none' }}
                  transition="transform 0.2s"
                >
                  <FontAwesomeIcon
                    icon={openSection === section.title ? faChevronUp : faChevronDown}
                    style={{ height: '1rem', width: '1rem' }}
                  />
                </Box>
              </Button>
              {/* Mobile: Collapsible list */}
              <Collapse in={openSection === section.title} animateOpacity>
                <VStack
                  as="ul"
                  spacing={2}
                  align="start"
                  pt={2}
                  pl={2}
                  fontSize="sm"
                >
                  {section.links.map((link, index) => (
                    <Box as="li" key={index} py={1}>
                      {link.isSpan ? (
                        <Text color="#1E293B" _dark={{ color: '#E2E8F0' }}>
                          {link.text}
                        </Text>
                      ) : (
                        <Link
                          href={link.href}
                          color="#93a2b8"
                          _hover={{ color: '#1a202c' }}
                          _dark={{ color: '#E2E8F0', _hover: { color: '#93a2b8' } }}
                        >
                          {link.text}
                        </Link>
                      )}
                    </Box>
                  ))}
                </VStack>
              </Collapse>
              {/* Desktop: Always-visible list */}
              <VStack
                as="ul"
                spacing={2}
                align="start"
                display={{ base: 'none', lg: 'flex' }}
                fontSize="sm"
              >
                {section.links.map((link, index) => (
                  <Box as="li" key={index} py={1}>
                    {link.isSpan ? (
                      <Text color="#93a2b8" _dark={{ color: '#93a2b8' }}>
                        {link.text}
                      </Text>
                    ) : (
                      <Link
                        href={link.href}
                        color="#93a2b8"
                        _hover={{ color: '#1a202c' }}
                        _dark={{ color: '#93a2b8', _hover: { color: '#edf2f7' } }}
                      >
                        {link.text}
                      </Link>
                    )}
                  </Box>
                ))}
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
        {/* Footer bottom section */}
        <Box textAlign="center" mt={4}>
          <Text fontSize="sm" color="#1E293B" _dark={{ color: '#E2E8F0' }}>
            &copy; {new Date().getFullYear()} OWASP Nest. All rights reserved.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
