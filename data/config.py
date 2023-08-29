import os
from dotenv import load_dotenv

#Load dotenv var
load_dotenv()

DATABASE_URL = os.environ['DATABASE_URL']