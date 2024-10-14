# 베이스 이미지로 Node.js 설정
FROM node:14

# 애플리케이션 디렉토리를 생성
WORKDIR /usr/src/app

# package.json과 package-lock.json을 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 애플리케이션 코드를 복사
COPY . .

# 애플리케이션을 바깥에서 접근 가능하도록 포트 설정
EXPOSE 3000

# 애플리케이션 시작 명령
CMD [ "npm", "start" ]
