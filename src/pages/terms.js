// src/pages/terms-and-conditions.js
import React from 'react';
import Layout from '../components/Layout';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const TermsAndConditionsPage = () => {
    return (
        <Layout>
            <Box py={16} px={6} bg="gray.50">
                <VStack spacing={8} maxWidth="800px" mx="auto">
                    <Heading as="h1" size="xl">AGB (Terms & Conditions)</Heading>

                    <Box>
                        <Heading as="h2" size="lg" mb={4}>1. Geltungsbereich</Heading>
                        <Text>
                            Diese Auftragsbedingungen gelten für Verträge zwischen dem Übersetzer und seinem Auftraggeber,
                            soweit nicht etwas anderes ausdrücklich vereinbart oder gesetzlich unabdingbar vorgeschrieben ist.
                            Die Geschäftsbedingungen werden vom Auftraggeber durch Lesen der Webseite oder Auftragserteilung anerkannt.
                            Allgemeine Geschäftsbedingungen des Auftraggebers sind für den Übersetzer nur verbindlich, wenn er sie ausdrücklich anerkannt hat.
                        </Text>
                    </Box>

                    <Box>
                        <Heading as="h2" size="lg" mb={4}>2. Umfang des Übersetzungsauftrags</Heading>
                        <Text>
                            Die Übersetzung wird nach den Grundsätzen ordnungsgemäßer Berufsausübung sorgfältig ausgeführt. Der Auftraggeber erhält
                            die vertraglich vereinbarte Ausfertigung der Übersetzung.
                        </Text>
                    </Box>

                    <Box>
                        <Heading as="h2" size="lg" mb={4}>3. Mitwirkungs- und Aufklärungspflicht des Auftraggebers</Heading>
                        <Text>
                            Der Auftraggeber hat den Übersetzer rechtzeitig über gewünschte Ausführungsformen der Übersetzung zu unterrichten
                            (Verwendungszweck, Lieferung auf Datenträgern, Anzahl der Ausfertigungen, Druckreife, äußere Form der Übersetzung etc.).
                            Ist die Übersetzung für den Druck bestimmt, überlässt der Auftraggeber dem Übersetzer einen Korrekturabzug rechtzeitig vor
                            Drucklegung, so dass der Übersetzer eventuelle Fehler beseitigen kann. Namen und Zahlen sind vom Auftraggeber zu überprüfen.
                        </Text>
                    </Box>

                    <Box>
                        <Heading as="h2" size="lg" mb={4}>4. Rechte des Auftraggebers bei Mängeln</Heading>
                        <Text>
                            Der Übersetzer behält sich das Recht auf Mängelbeseitigung vor. Der Auftraggeber hat zunächst nur Anspruch auf Beseitigung
                            von möglichen in der Übersetzung enthaltenen Mängeln. Der Anspruch auf Mängelbeseitigung muss vom Auftraggeber unter genauer
                            Angabe des Mangels innerhalb von 10 Werktagen nach Erhalt der fertig gestellten Übersetzung geltend gemacht werden.
                        </Text>
                    </Box>

                    <Box>
                        <Heading as="h2" size="lg" mb={4}>5. Haftung</Heading>
                        <Text>
                            Der Übersetzer haftet nur im Falle grober Fahrlässigkeit und bei Vorsatz. Nicht als grobe Fahrlässigkeit einzustufen
                            sind Schäden, die durch Computerausfälle und Übertragungsstörungen bei E-Mail-Versendung oder durch Viren verursacht worden sind.
                        </Text>
                    </Box>

                    <Box>
                        <Heading as="h2" size="lg" mb={4}>6. Berufsgeheimnis</Heading>
                        <Text>
                            Der Übersetzer verpflichtet sich, Stillschweigen über alle Tatsachen zu bewahren, die ihm im Zusammenhang mit einer Tätigkeit
                            für den Auftraggeber bekannt werden.
                        </Text>
                    </Box>

                    <Box>
                        <Heading as="h2" size="lg" mb={4}>7. Mitwirkung Dritter</Heading>
                        <Text>
                            Der Übersetzer ist berechtigt, zur Ausführung des Auftrags Mitarbeiter oder fachkundige Dritte heranzuziehen. Bei Heranziehung
                            von fachkundigen Dritten hat der Übersetzer dafür zu sorgen, dass sich diese zur Verschwiegenheit entsprechend Nr. 6 verpflichten.
                        </Text>
                    </Box>

                    <Box>
                        <Heading as="h2" size="lg" mb={4}>8. Zahlungsbedingungen</Heading>
                        <Text>
                            Die Rechnungen des Übersetzers sind fällig und zahlbar ohne Abzug innerhalb von 14 Tagen nach Rechnungsdatum. Alle Preise verstehen
                            sich netto zuzüglich der gesetzlichen Umsatzsteuer.
                        </Text>
                    </Box>

                    <Box>
                        <Heading as="h2" size="lg" mb={4}>9. Eigentumsvorbehalt und Urheberrecht</Heading>
                        <Text>
                            Die Übersetzung bleibt bis zur vollständigen Bezahlung Eigentum des Übersetzers. Bis dahin hat der Auftraggeber kein Nutzungsrecht.
                            Der Übersetzer behält sich ein etwa entstandenes Urheberrecht vor.
                        </Text>
                    </Box>

                    <Box>
                        <Heading as="h2" size="lg" mb={4}>10. Rücktrittsrecht</Heading>
                        <Text>
                            Soweit die Erteilung des Übersetzungsauftrags darauf beruht, dass der Übersetzer die Anfertigung von Übersetzungen im Internet
                            angeboten hat, verzichtet der Auftraggeber auf sein möglicherweise bestehendes Widerrufsrecht.
                        </Text>
                    </Box>

                    <Box>
                        <Heading as="h2" size="lg" mb={4}>11. Anwendbares Recht</Heading>
                        <Text>
                            Für den Auftrag und alle sich daraus ergebenden Ansprüche gilt deutsches Recht. Erfüllungsort ist der Wohnsitz des Übersetzers
                            oder der Sitz seiner beruflichen Niederlassung.
                        </Text>
                    </Box>

                    <Box>
                        <Heading as="h2" size="lg" mb={4}>12. Salvatorische Klausel</Heading>
                        <Text>
                            Die Wirksamkeit dieser Auftragsbedingungen wird durch die Nichtigkeit oder Unwirksamkeit einzelner Bestimmungen nicht berührt.
                            Die unwirksame Bestimmung ist durch eine gültige zu ersetzen, die dem wirtschaftlichen Ergebnis bzw. dem angestrebten Zweck
                            möglichst nahe kommt.
                        </Text>
                    </Box>

                    <Box>
                        <Heading as="h2" size="lg" mb={4}>13. Änderungen und Ergänzungen</Heading>
                        <Text>
                            Änderungen und Ergänzungen dieser AGB sind nur gültig, wenn sie schriftlich vereinbart worden sind. Dies gilt auch für die Änderung
                            des Schriftformerfordernisses selbst.
                        </Text>
                    </Box>
                </VStack>
            </Box>
        </Layout>
    );
};

export default TermsAndConditionsPage;
