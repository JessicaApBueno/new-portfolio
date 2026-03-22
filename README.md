# 🌐 Vah MaNa - Portfolio Cloud Native

![GCP](https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)
[![Acessar Portfólio Vah MaNa](https://img.shields.io/badge/Acessar_Portfólio-Vah_MaNa-800080?style=for-the-badge&logo=google-cloud&logoColor=white&labelColor=333333)](https://portfolio-site-73809992151.us-central1.run.app/index.html)

> **"O elo entre o legado e a inovação."**

Este é o meu portfólio profissional, desenvolvido com foco em práticas modernas de **Cloud Computing**, **DevOps** e **SRE**. Mais do que um showcase de projetos, este espaço carrega a essência do meu manifesto pessoal e técnico.

## 💜 O Manifesto Vah MaNa

O nome **Vah MaNa** é uma homenagem às três gerações de mulheres que definem minha trajetória: minha mãe **Va**nusa, minha avó **Ma**ria Terezinha e minha filha **Na**tasha. 

No universo da tecnologia, este legado se traduz em três pilares:
* **Resiliência:** Inspirada por quem abriu caminhos com coragem.
* **Aprendizado Contínuo:** Dedicação total para ser exemplo para quem vem depois.
* **Inovação com Propósito:** Cada pipeline construído carrega a responsabilidade de honrar essa história.

Para mim, **Cloud é o meio**, enquanto **DevOps e SRE são os pilares** que sustentam a verdadeira missão: a **Estabilidade**.

## 📺 Demonstração em Vídeo


https://github.com/user-attachments/assets/46ad14d6-52b5-4c1c-a041-df156e13d509


## 🛠️ Arquitetura e Tech Stack

O projeto foi desenhado para ser totalmente automatizado e resiliente, utilizando o que há de mais moderno em infraestrutura como serviço:

* **Containerização:** Aplicação empacotada com **Docker** utilizando imagens leves (Alpine).
* **Servidor Web:** **Nginx** configurado para alta performance e segurança.
* **Hospedagem:** **Google Cloud Run** (Serverless), garantindo escalabilidade automática e baixo custo.
* **CI/CD:** Pipeline automatizado via **GitHub Actions**.
* **Segurança:** Implementação de **Workload Identity Federation (OIDC)**, eliminando o uso de chaves JSON estáticas para autenticação entre GitHub e GCP.

## 🚀 Pipeline de Deploy

Cada `git push` na branch `main` dispara um fluxo automatizado:
1.  **Lint & Build:** Validação do código e construção da imagem Docker.
2.  **Push to Artifact Registry:** Armazenamento seguro da imagem no repositório do Google Cloud.
3.  **Blue/Green Deploy:** Atualização do serviço no Cloud Run com zero downtime.
<img width="692" height="349" alt="image" src="https://github.com/user-attachments/assets/6157187a-9d85-4039-9798-8ff044781048" />


## 👤 Sobre Mim

Sou **Jessica Bueno**, Cloud Engineer certificada (GCP ACE) e entusiasta da cultura DevOps. Atualmente, foco em transformar processos complexos em fluxos estáveis e escaláveis.

---
Desenvolvido com ❤️ por [Jessica Bueno](https://github.com/JessicaApBueno)
