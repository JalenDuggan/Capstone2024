from dotenv import load_dotenv
from langchain.document_loaders import UnstructuredPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter


def make_text_chunks(test):
  print(test)

def main():
  load_dotenv()

  ## Load external pdf will not keep
  loader = UnstructuredPDFLoader("./sample.pdf")
  data=loader.load()
  
  print(f'you have {len(data)} documents in your data')
  print(f'you have {len(data[0].page_content)} documents in your data')

  text = ""
  #chunk text
  text_chunks = make_text_chunks(text)

if __name__ == '__main__':
  main()