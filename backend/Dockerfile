FROM python:3.10.5
WORKDIR /app
COPY requirement.txt /app/
RUN pip install -r requirement.txt
COPY . /app/
RUN python manage.py migrate
RUN #python manage.py runserver
CMD [ "python","manage.py","runserver"]
EXPOSE 8000
