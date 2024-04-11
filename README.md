# Component-moda `create-react-app`.

Actuellement utilisé pour ajouter un modal après quelque chose comme un clic sur un bouton. pour afficher un message de confirmation

## Prérequi :

Node.js

Veuillez vous assurer que vous disposez de la bonne version. Vous pouvez le vérifier en utilisant les commandes suivantes dans votre terminal :
Vérifier la version de Node.js
nœud --version

### Installation run the following command: `npm install component-modal`

Import :

import Modale from 'component-modal';

## Définissez les accessoires du composant :

### onClose :

Une fonction à exécuter lorsque le modal est fermé. Il est généralement déclenché lorsque l'utilisateur clique sur le bouton de fermeture.
Type : Fonction

### isOpen:

Un booléen qui contrôle l'affichage de la modal. Si (true), la modal est affichée ; si (false), elle est cachée.

backgroundColor: personnalize the color of the background in the modal.
type: String

## message:

Le message à afficher à l'intérieur de la modal.

### `Methodes`

handleClose: Une fonction interne utilisée pour gérer la fermeture de la modal. Elle est appelée lorsque l'utilisateur clique sur le bouton de fermeture.

### `utilisation`

Pour utiliser ce composant, importez-le dans votre application React et intégrez-le là où vous souhaitez afficher une fenêtre modale.

##### Example:

    import React from 'react';
    import Modale from 'component-modal';

        function MyComponent() {
            const handleClose = () => {
            onClose();
            };

            if (!isOpen) return null;
            return (
                <div className="modal-overlay">
                <div className="modal">
                    <div className="modal-content">
                    <span className="close" onClick={handleClose}>&times;</span>
                    <p>{message}</p>
                    <button onClick={handleClose}>Close</button>
                    </div>
                </div>
                </div>
            );
        }

    export default MyComponent;
