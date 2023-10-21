# Component-modal-grst library of React components created using `create-react-app`.
Currently used to add a modal after anything like a click on a button.



## Prerequisites : 
Node.js v12

Please make sure you have the right version. You can verify this by using the following commands in your terminal:
Check Node.js version
node --version



### Installation run the following command: `npm install component-modal-grst`



#### How to use it :

This component use a fontAwesome icon, but feel free to use a SVG or anything else if you need it.

Import : 

import Modale from 'component-modal-grst';

Set the component props:

onClose: A function to be executed when the modal is closed. It's typically triggered when the user clicks the close button.
Type: Function

fullName: A string that allows you to personalize the name displayed in the modal.
Type: String

backgroundColor: personnalize the color of the background in the modal.
type: String

textColor: personnalize the color of the text in the modal.
Type: String



##### Example:

    import React from 'react';
    import Modale from 'component-modal-grst';

        function MyComponent() {
            const closeModale = () => {
                // code
            };

            return (
                <div>
                    <h1>Mon composant React</h1>
                    <p>Cliquez sur le bouton pour afficher la modale :</p>
                    <button onClick={openModale}>Afficher la modale</button>

                    <Modale
                        fullName={FirstName + ' ' + LastName}
                        onClose={closeModale}
                        backgroundColor="#ffcc00"
                        textColor="#333"
                    />
                </div>
            );
        }

    export default MyComponent;




