import xml.etree.ElementTree as ET

def find_word_in_xml(xml_path, target_word):
    # Load the XML file
    tree = ET.parse(xml_path)
    root = tree.getroot()

    # Find and print <seg> tags containing the target word, their part of speech attributes, and the line number
    for l_tag in root.findall(".//l"):
        for seg_tag in l_tag.findall(".//seg"):
            word = seg_tag.text.strip()
            pos = seg_tag.attrib.get('pos', '')
            
            if word == target_word:
                line_number = l_tag.attrib.get('n', '')
                print(f"Word: {word}, Part of Speech: {pos}, Line Number: {line_number}")

# Enter the path to your XML file
# Can replace the part in quotes with the relative path of any XML file in NewXML.
xml_file_path = 'XML/NewXML/24-hoc.xml'

# Get the target word from user input
target_word = input("Enter a word: ")

# Call the function to find the target word in the XML file
find_word_in_xml(xml_file_path, target_word)