from html.parser import HTMLParser


class ParseAttributes(HTMLParser):
    def __init__(self):
        super().__init__()
        # Local arrays
        self.tagArr = []
        self.attrArr = []
        self.rhymeArr = []
        self.posArr = []
        self.htmlTagArr = ["html", "head", "title", "body", "h1", "p", "hr", "address"]
        self.questionableXML = []

    # Collects unique properties and stores them in the above arrays
    def handle_starttag(self, tag, attrs):
        if tag not in self.tagArr:
            self.tagArr.append(tag)
        if tag in self.htmlTagArr and self.currentFile not in self.questionableXML:
            self.questionableXML.append(self.currentFile)

        for attr in attrs:
            if attr[0] not in self.attrArr:
                self.attrArr.append(attr[0])
            if attr[0] == "rhyme" and attr[1] not in self.rhymeArr:
                self.rhymeArr.append(attr[1])
            if attr[0] == "pos" and attr[1] not in self.posArr:
                self.posArr.append(attr[1])


# Begin main section

# Global arrays
globalTagArr = []
globalAttrArr = []
globalRhymeArr = []
globalPosArr = []
globalQuestionableXML = []

# Initialize parser
parser = ParseAttributes()

# Open the XML file and search for unique tags
with open("XML/NewXML/SingularXML.xml", "r") as file:
    xml_content = file.read()
    parser.currentFile = "file.xml"
    parser.feed(xml_content)

# Collect tags
tempArr = parser.tagArr
for attr in tempArr:
    if attr not in globalTagArr:
        globalTagArr.append(attr)

# Collect attributes
tempArr = parser.attrArr
for attr in tempArr:
    if attr not in globalAttrArr:
        globalAttrArr.append(attr)

# Collect rhyme schemes
tempArr = parser.rhymeArr
for attr in tempArr:
    if attr not in globalRhymeArr:
        globalRhymeArr.append(attr)

# Collect parts of speech
tempArr = parser.posArr
for attr in tempArr:
    if attr not in globalPosArr:
        globalPosArr.append(attr)

# Collect filenames of questionable XML documents
tempArr = parser.questionableXML
for name in tempArr:
    if name not in globalQuestionableXML:
        globalQuestionableXML.append(name)

# Print results
print("\nTags:")
print(globalTagArr)

print("\nAttributes:")
print(globalAttrArr)

print("\nRhyme Schemes:")
print(globalRhymeArr)

print("\nParts of Speech:")
print(globalPosArr)

print("\nQuestionable XML files:")
print(globalQuestionableXML)
