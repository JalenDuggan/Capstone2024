from dotenv import load_dotenv
from langchain.document_loaders import UnstructuredPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.vectorstores import pinecone
from langchain.embeddings.openai import OpenAIEmbeddings
import pinecone


def make_text_chunks(data):
  text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=150,
    chunk_overlap=50,
    length_function=len
  )
  chunks = text_splitter.split_documents(data)
  return chunks


def main():
  load_dotenv()

  ## Load external pdf will not keep
  loader = UnstructuredPDFLoader("./sample.pdf")
  data=loader.load()
  
  print(f'you have {len(data)} documents in your data')
  print(f'you have {len(data[0].page_content)} documents in your data')

  text = ""
  # Chunk text
  text_chunks = make_text_chunks(data)
  print(f'you have {len(text_chunks)} chunks')
  print(text_chunks)

  # Openai Embeddings


if __name__ == '__main__':
  main()