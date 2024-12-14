// src/pages/impressum.js
import React from 'react';
import Layout from '../components/Layout';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const ImpressumPage = () => {
    return (
        <Layout>
            <Box py={16} px={6} bg="gray.50">
                <VStack spacing={8} maxWidth="800px" mx="auto">
                    <Heading as="h1" size="xl">Impressum</Heading>

                    <Box>
                        <Heading as="h2" size="lg" mb={4}>buehner translation</Heading>
                        <Text>Gerichtlich vereidigte Diplomübersetzerin Martina Bühner</Text>
                        <Text>Gegen Eich 15/2</Text>
                        <Text>71640 Ludwigsburg</Text>
                        <Text>Telefon: +49 (0) 7141 97 25 69</Text>
                        <Text>E-Mail: info@buehner-translation.de</Text>
                        <Text>Steuernr.: 71284/74950</Text>
                    </Box>

                    <Box>
                        <Heading as="h2" size="lg" mb={4}>1. Inhalt des Onlineangebotes</Heading>
                        <Text>
                            Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen.
                            Haftungsansprüche gegen den Autor, welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung
                            der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, sind grundsätzlich
                            ausgeschlossen, sofern seitens des Autors kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt. Alle Angebote sind freibleibend
                            und unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern,
                            zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
                        </Text>
                    </Box>

                    <Box>
                        <Heading as="h2" size="lg" mb={4}>2. Verweise und Links</Heading>
                        <Text>
                            Bei direkten oder indirekten Verweisen auf fremde Webseiten ("Hyperlinks"), die außerhalb des Verantwortungsbereiches des Autors liegen,
                            würde eine Haftungsverpflichtung ausschließlich in dem Fall in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm technisch
                            möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern. Der Autor erklärt hiermit ausdrücklich, dass zum Zeitpunkt der
                            Linksetzung keine illegalen Inhalte auf den zu verlinkenden Seiten erkennbar waren.
                        </Text>
                    </Box>

                    <Box>
                        <Heading as="h2" size="lg" mb={4}>3. Urheber- und Kennzeichenrecht</Heading>
                        <Text>
                            Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der verwendeten Bilder, Grafiken, Tondokumente, Videosequenzen und Texte zu beachten,
                            von ihm selbst erstellte Bilder, Grafiken, Tondokumente, Videosequenzen und Texte zu nutzen oder auf lizenzfreie Grafiken, Tondokumente, Videosequenzen
                            und Texte zurückzugreifen. Alle innerhalb des Internetangebotes genannten und ggf. durch Dritte geschützten Marken- und Warenzeichen unterliegen
                            uneingeschränkt den Bestimmungen des jeweils gültigen Kennzeichenrechts und den Besitzrechten der jeweiligen eingetragenen Eigentümer.
                        </Text>
                    </Box>

                    <Box>
                        <Heading as="h2" size="lg" mb={4}>4. Datenschutz</Heading>
                        <Text>
                            Sofern innerhalb des Internetangebotes die Möglichkeit zur Eingabe persönlicher oder geschäftlicher Daten (Emailadressen, Namen, Anschriften) besteht,
                            so erfolgt die Preisgabe dieser Daten seitens des Nutzers auf ausdrücklich freiwilliger Basis. Die Inanspruchnahme und Bezahlung aller angebotenen
                            Dienste ist - soweit technisch möglich und zumutbar - auch ohne Angabe solcher Daten bzw. unter Angabe anonymisierter Daten oder eines Pseudonyms gestattet.
                            Die Nutzung der im Rahmen des Impressums oder vergleichbarer Angaben veröffentlichten Kontaktdaten wie Postanschriften, Telefon- und Faxnummern sowie
                            Emailadressen durch Dritte zur Übersendung von nicht ausdrücklich angeforderten Informationen ist nicht gestattet.
                        </Text>
                    </Box>

                    <Box>
                        <Heading as="h2" size="lg" mb={4}>5. Rechtswirksamkeit dieses Haftungsausschlusses</Heading>
                        <Text>
                            Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern Teile oder einzelne
                            Formulierungen dieses Textes der geltenden Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben die übrigen Teile des
                            Dokumentes in ihrem Inhalt und ihrer Gültigkeit davon unberührt.
                        </Text>
                    </Box>
                </VStack>
            </Box>
        </Layout>
    );
};

export default ImpressumPage;
