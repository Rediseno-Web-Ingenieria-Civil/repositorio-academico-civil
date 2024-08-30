def getFileContent(pathAndFileName):
    with open(pathAndFileName, 'r', encoding='utf-8') as theFile:
        data = theFile.read()
        return data

def writeOutput(pathAndFileName, output):
    with open(pathAndFileName, 'w', encoding='utf-8') as theFile:
        theFile.write(output)

data = getFileContent("docs/index.html")
data_split = data.split("main>")
output = "<main>" + data_split[1] + "main>"
writeOutput("out.html", output)