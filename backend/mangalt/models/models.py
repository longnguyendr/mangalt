from sqlalchemy import Column, Integer, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import scoped_session, sessionmaker
from zope.sqlalchemy import register

DBSession = scoped_session(sessionmaker())
register(DBSession)
Base = declarative_base()


class Page(Base):
    __tablename__ = 'tests'
    uid = Column(Integer, primary_key=True)
    title = Column(Text, unique=True)
    body = Column(Text)

class User(Base):
    __tablename__ = 'user'
    uid = Column(Integer, primary_key=True)
    email = Column(Text, unique=True)
    password = Column(Text)