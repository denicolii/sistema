function addProduct() {
    // Obter os valores dos campos
    const productName = document.getElementById('product-name').value;
    const productPrice = document.getElementById('product-price').value;
    const productDescription = document.getElementById('product-description').value;
    const productIMG = document.createElement('img');

    const inputIMG = document.querySelector('#inputImagem');

    // Verificar se todos os campos estão preenchidos
    if (productName && productPrice && productDescription) {
        // Criar um objeto de produto
        const product = {
            name: productName,
            price: parseFloat(productPrice),
            description: productDescription,
        };

        // Adicionar o produto à lista
        addProductToList(product);
        addLocalStorage(product);
        // Limpar os campos do formulário
        clearForm();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function addProductToList(product) {
    const productList = document.getElementById('product-list');

    // Criar um elemento de produto
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    // Preencher o conteúdo do elemento de produto
    productElement.innerHTML = `
        <strong>${product.name}</strong> - R$${product.price.toFixed(2)}<br>
        ${product.description}
        <button onclick="removeProduct(this)">Remover</button>
    `;

    // Adicionar o elemento à lista
    productList.appendChild(productElement);
}

function removeProduct(button) {
    const productElement = button.parentNode;
    const productList = document.getElementById('product-list');
    const productName = productElement.querySelector('strong').textContent;

    // Remover o elemento da lista
    productList.removeChild(productElement);

    // Obter a lista de produtos do Local Storage
    const productListInStorage = JSON.parse(localStorage.getItem('products')) || [];

    // Encontrar o índice do produto a ser removido na lista do Local Storage
    const index = productListInStorage.findIndex(product => product.name === productName);

    if (index !== -1) {
        // Remover o produto da lista do Local Storage
        productListInStorage.splice(index, 1);
        // Atualizar o Local Storage com a lista modificada
        localStorage.setItem('products', JSON.stringify(productListInStorage));
    }
}

function clearForm() {
    document.getElementById('product-name').value = '';
    document.getElementById('product-price').value = '';
    document.getElementById('product-description').value = '';
}

function addLocalStorage(product) {
    let productList = JSON.parse(localStorage.getItem('products')) || [];
    productList.push(product);
    localStorage.setItem('products', JSON.stringify(productList));
}

function getLocalStorage() {
    const productList = document.querySelector("#product-list");
    const productListInStorage = JSON.parse(localStorage.getItem('products')) || [];

    productListInStorage.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        productElement.innerHTML = `
            <strong>${product.name}</strong> - R$${product.price.toFixed(2)}<br>
            ${product.description}
            <button onclick="removeProduct(this)">Remover</button>
        `;
        productList.appendChild(productElement);
    });
}

window.addEventListener('load', () => {
    getLocalStorage();
});



/*
 inputImagem.addEventListener('change', function() {
            const file = inputImagem.files[0];

            if (file) {
                const reader = new FileReader();

                reader.onload = function(e) {
                    imagemSelecionada.src = e.target.result;
                };

                reader.readAsDataURL(file);
            } else {
                imagemSelecionada.src = ''; // Limpar a imagem se nenhum arquivo for selecionado
            }
        });

* */