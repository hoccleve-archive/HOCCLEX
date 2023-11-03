import xml.etree.ElementTree as ET

# This isn't very helpful, just pulls out lines that have weird POS tags.
# Load the XML file
# Can replace this with any relative path
tree = ET.parse('XML/NewXML/01-hoc.xml')
root = tree.getroot()

# Find and print <l> tags with <seg> tags having a pos attribute with a number before %
for l_tag in root.findall(".//l"):
    has_percentage_pos = False
    for seg_tag in l_tag.findall(".//seg"):
        pos_value = seg_tag.attrib.get('pos', '')
        if any(char.isdigit() for char in pos_value) and '%' in pos_value:
            has_percentage_pos = True
            break  # No need to check further, we've found a match
    
    if has_percentage_pos:
        # Remove the 'type' attribute from <seg> tags
        for seg_tag in l_tag.findall(".//seg"):
            if 'type' in seg_tag.attrib:
                del seg_tag.attrib['type']
        
        # Print the modified <l> tag
        print(ET.tostring(l_tag, encoding='utf-8').decode('utf-8'))
