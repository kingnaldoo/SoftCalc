<template>
    <div class="container">
        <div class="navbar">
            <div class="logo-container">
                <img src="../assets/icons/logo.svg" alt="Logo">
            </div>

            <nav>
                <a href="/">
                    <div class="nav-item-content">
                        <img src="../assets/icons/calc-icon.svg" alt="Padrão">
                        <h5>Padrão</h5>
                    </div>
                </a>
            </nav>
        </div>

        <div class="input">
            <div class="input-display">
                <input type="text" id="display"/>
            </div>

            <div class="input-keyboard">
                <ul class="keyboard-list">
                    <li class="keyboard-item-top">
                        <button class="delete" type="button">
                            <img src="../assets/icons/delete.svg" alt="Deletar número">
                        </button>

                        <button class="clear" type="button">CE</button>
                    </li>

                    <div class="keyboard-item-bottom">
                        <button class="key" type="button">%</button>
                        <button class="key" type="button">1/X</button>
                        <button class="key" type="button">x²</button>
                        <button class="key" type="button">√</button>
                        <button class="key" type="button">x!</button>
                        <button class="key" type="button">ln</button>
                        <button class="key" type="button">log</button>
                        <button class="key" type="button">7</button>
                        <button class="key" type="button">8</button>
                        <button class="key" type="button">9</button>
                        <button class="key" type="button">*</button>
                        <button class="key" type="button">4</button>
                        <button class="key" type="button">5</button>
                        <button class="key" type="button">6</button>
                        <button class="key" type="button">-</button>
                        <button class="key" type="button">1</button>
                        <button class="key" type="button">2</button>
                        <button class="key" type="button">3</button>
                        <button class="key" type="button">+</button>
                        <button class="key" type="button">0</button>
                        <button class="key" type="button">,</button>
                        <button class="key equal" type="button">=</button>
                    </div>
                </ul>
            </div>
        </div>

        <div class="history">
            <h3>History</h3>
            
            <ul class="history-list">
                <li class="history-item">
                    <h4>4 + 5</h4>
                    <h5>9</h5>
                </li>
            </ul>
            
        </div>
    </div>
</template>

<script lang="ts">

export default {
    name: 'Standart',
};
</script>