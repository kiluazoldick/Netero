#!/usr/bin/env node

const { program } = require('commander');
const AdmZip = require('adm-zip');
const fs = require('fs');
const path = require('path');

const GITHUB_BASE = 'https://github.com/Fred123333/Templates/raw/main/templates';

program
  .name('netero-cli')
  .description('CLI pour installer les templates Netero')
  .version('1.0.0');

program
  .command('install <template>')
  .description('Télécharger et extraire un template')
  .action(async (template) => {
    const url = `${GITHUB_BASE}/${template}.zip`;
    const destination = path.resolve(process.cwd(), template);

    console.log(`Téléchargement du template "${template}"...`);
    console.log(`URL : ${url}`);

    try {
      // 1. Téléchargement avec le fetch natif (Node 18+)
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Template introuvable (HTTP ${response.status})`);
      }

      // 2. Récupération des octets du ZIP
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      // 3. Extraction en mémoire vers le dossier de destination
      const zip = new AdmZip(buffer);
      zip.extractAllTo(destination, /* overwrite */ true);

      console.log(`Template "${template}" installé avec succès dans ./${template}`);
    } catch (error) {
      console.error(`Erreur : ${error.message}`);
      process.exit(1);
    }
  });

program.parse(process.argv);