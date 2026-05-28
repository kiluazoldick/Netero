#!/usr/bin/env node

const { program } = require('commander');
const download = require('download');
const fs = require('fs-extra');
const path = require('path');

program
  .command('install <template>')
  .description('Télécharger un template')
  .action(async (template) => {
    console.log(`Téléchargement du template "${template}"...`);
    
    // URL du template sur GitHub (dossier templates/)
    const url = `https://github.com/Fred123333/Templates/raw/main/templates/${template}.zip`;
    console.log(`🔗 URL tentée : ${url}`); // ← ajoute cette ligne
    try {
      // Téléchargement et extraction
      await download(url, path.resolve(process.cwd(), template), { extract: true });
      console.log(` Template "${template}" installé avec succès dans ./${template}`);
    } catch (error) {
      console.error(` Erreur : Template "${template}" introuvable ou problème réseau`);
      process.exit(1);
    }
  });

program.parse(process.argv);
