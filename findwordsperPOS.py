import xml.etree.ElementTree as ET


def extract_words_by_pos(xml_path):
    # Load the XML file
    tree = ET.parse(xml_path)
    root = tree.getroot()

    # Create a dictionary to store words by part of speech along with line numbers
    words_by_pos = {}

    # Iterate through <l> and <seg> tags and organize words by part of speech
    for l_tag in root.findall(".//l"):
        line_number = l_tag.attrib.get("n", "")
        for seg_tag in l_tag.findall(".//seg"):
            word = seg_tag.text.strip()
            pos = seg_tag.attrib.get("pos", "")

            if pos not in words_by_pos:
                words_by_pos[pos] = [(word, line_number)]
            else:
                words_by_pos[pos].append((word, line_number))

    return words_by_pos


# Enter the path to your XML file
# Can replace the part in quotes with the relative path of any XML file in NewXML.
xml_file_path = "XML/NewXML/01-hoc.xml"

# Call the function to extract words by part of speech
words_by_pos = extract_words_by_pos(xml_file_path)

# Print the words associated with each part of speech along with their line numbers
for pos, words in words_by_pos.items():
    print(f"Part of Speech: {pos}")
    for word, line_number in words:
        print(f"Word: {word}, Line Number: {line_number}")
    print()
