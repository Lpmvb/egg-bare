.PHONY: dstart dstop drestart start stop restart

dstart:
	docker-compose -f docker-compose.dev.yml up --build -d
dstop:
	docker-compose -f docker-compose.dev.yml down
drestart:
	docker-compose -f docker-compose.dev.yml down
	docker-compose -f docker-compose.dev.yml up --build -d
	docker images | grep none | awk '{print $$3 }' | xargs docker rmi
start:
	docker-compose up --build -d
stop:
	docker-compose down
restart:
	docker-compose down
	docker-compose up --build -d
	docker images | grep none | awk '{print $$3 }' | xargs docker rmi
