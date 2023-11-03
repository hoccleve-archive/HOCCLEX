from html.parser import HTMLParser


class ParseAttributes(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tagArr = []
        self.attrArr = []
        self.rhymeArr = []
        self.posArr = []
        self.htmlTagArr = ["html", "head", "title", "body", "h1", "p", "hr", "address"]
        self.questionableXML = []
        self.currentFile = None

    def setCurrentFile(self, name):
        self.currentFile = name

    def handle_starttag(self, tag, attrs):
        if tag not in self.tagArr:
            self.tagArr.append(tag)
        if tag in self.htmlTagArr and self.currentFile not in self.questionableXML:
            self.questionableXML.append(self.currentFile)

        for attr in attrs:
            attr_name, attr_value = attr
            if attr_name not in self.attrArr:
                self.attrArr.append(attr_name)
            if attr_name == "rhyme" and attr_value not in self.rhymeArr:
                self.rhymeArr.append(attr_value)
            if attr_name == "pos" and attr_value not in self.posArr:
                self.posArr.append(attr_value)


# Begin main section

# Global arrays
globalTagArr = []
globalAttrArr = []
globalRhymeArr = []
globalPosArr = []
globalQuestionalXML = []

# Initialize parser
parser = ParseAttributes()

# Opens all 33 poems from the web and searches for unique tags
# for i in range(1, 40):
# url = 'http://hoccleve.laits.utexas.edu/output' + str(i) + '.xml'
# xml = urllib.urlopen(url)
xml_file = open("XML/NewXML/SingularXML.xml")
# parser.setCurrentFile('output' + str(i) + '.xml')
parser.feed(xml_file.read())
xml_file.close()

# Collects tags
tempArr = parser.tagArr
for attr in tempArr:
    if attr not in globalTagArr:
        globalTagArr.append(attr)

# Collects attributes
tempArr = parser.attrArr
for attr in tempArr:
    if attr not in globalAttrArr:
        globalAttrArr.append(attr)

# Collects rhyme schemes
tempArr = parser.rhymeArr
for attr in tempArr:
    if attr not in globalRhymeArr:
        globalRhymeArr.append(attr)

# Collects parts of speech
tempArr = parser.posArr
for attr in tempArr:
    if attr not in globalPosArr:
        globalPosArr.append(attr)

# Collects filenames of questionable XML documents
tempArr = parser.questionableXML
for name in tempArr:
    if name not in globalQuestionalXML:
        globalQuestionalXML.append(name)


list_of_unique_POS = []

unique_POS = set(globalPosArr)

for i in unique_POS:
    list_of_unique_POS.append(i)


# Print results
print("\nTags:")
print(globalTagArr)

print("\nAttributes:")
print(globalAttrArr)

print("\nRhyme Schemes:")
print(globalRhymeArr)

print("\nParts of Speech:")
print(globalPosArr)



print("\nUnique POS")
print(list_of_unique_POS)

# print("\nQuestionable XML files:")
# print(globalQuestionalXML)
