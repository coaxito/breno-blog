+++
title = 'Digitalizando a minha coleção de CDs de forma prática no Linux'
date = "2025-05-26"
lastmod = "2025-05-29"
author = "Breno Santana de Souza Gouveia"
description = "Conheça o meu processo prático e descomplicado para digitalizar e organizar uma biblioteca digital de CDs no Linux."
url = "/digitalizando-a-minha-colecao-de-cds-de-forma-pratica-no-linux/"
image = "/images/thumbnails/cd_minimalista.jpg"
+++

## Extração e tamanho

Sound Juicer é um software de código aberto prático e eficiente, com interface minimalista desenvolvido em GTK para o GNOME.

Estou utilizando a versão em flatpak no Ubuntu 24.04 LTS. O meu gravador óptico é um Knup KP-LE300, modelo slim com preço acessível.

```flatpak install flathub org.gnome.SoundJuicer```

Optei por extrair em FLAC, um formato sem perdas que mantém a qualidade original dos CDs e facilita conversões futuras. No meu computador, o tempo de extração varia entre 10 a 25 minutos, de acordo com a quantidade e duração das faixas.

O disco Abbey Road dos Beatles, com dezessete faixas, ocupa cerca de 297,7 megabytes no total. Os tamanhos individuais variam: a menor faixa, "Her Majesty", tem 25 segundos e 2,1MB, enquanto a maior, "I Want You (She’s So Heavy)", dura 7 minutos e 47 segundos e ocupa 50,0MB.

## Metadados e organização

O software consulta o banco de dados do MusicBrainz para obter os metadados do disco e organizar os arquivos em pastas por artista e álbum.

Depois, uso o Ear Tag para ajustar e preencher com precisão o restantes dos dados, mantendo a interface simples e prática.

```flatpak install flathub app.drey.EarTag```

Editar todas as faixas simultaneamente facilita a inclusão da capa e de outros dados importantes, como a data exata de lançamento.

Para obter a imagem da capa, pesquiso no Google Imagens pelo nome do artista e do álbum, adicionando "Tidal", "Deezer" ou "Amazon" à consulta. Essa prática geralmente resulta em imagens com resolução a partir de 1200x1200px.

Para padronizar o tamanho, utilizo o Canva no navegador. Em um projeto com 1500x1500px, importo a imagem original, redimensiono-a para que se encaixe perfeitamente no quadro e, por fim, exporto o resultado em JPG.

Gosto de manter o arquivo da capa dentro da pasta do álbum. Assim, minha biblioteca digital fica organizada e simplifica o backup.

Tenho uma coleção considerável pela frente, sendo assim, a digitalização completa ainda vai levar um tempo. Mas, eventualmente, devo ter tudo concluído e armazenado em nuvem.

## Observações utéis

Para manter a qualidade original e facilitar futuras conversões, prefira formatos sem compressão.

Organize sua biblioteca usando uma hierarquia de pastas simplificada.

Remover poeira e sujeira com um pano macio ajuda a evitar erros e travamentos.
