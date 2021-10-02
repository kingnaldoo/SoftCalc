<template>
    <div class="container">
        <div class="navbar">
            <div class="logo-container">
                <img src="../assets/icons/logo.svg" alt="Logo">
            </div>

            <nav>
                <a class="nav-item active" href="/">
                    <div class="nav-item-content">
                        <img src="../assets/icons/calc-icon.svg" alt="Padrão">
                        <h5>Padrão</h5>
                    </div>
                </a>
            </nav>
        </div>

        <div class="input">
            <div class="input-display">
                <input 
                    type="text" 
                    id="display"
                    placeholder="0"
                />
            </div>

            <div class="input-keyboard">
                <ul class="keyboard-list">
                    <li class="keyboard-items-top">
                        <button class="top-key delete" type="button">
                            <img src="../assets/icons/delete.svg" alt="Deletar número">
                        </button>

                        <button class=" top-key clear" type="button">CE</button>
                    </li>

                    <div class="keyboard-items-bottom">
                        <button class="key-bottom" type="button">%</button>
                        <button class="key-bottom" type="button">1/X</button>
                        <button class="key-bottom" type="button">x²</button>
                        <button class="key-bottom" type="button">√</button>
                        <button class="key-bottom" type="button">x!</button>
                        <button class="key-bottom" type="button">ln</button>
                        <button class="key-bottom" type="button">log</button>
                        <button class="key-bottom" type="button">7</button>
                        <button class="key-bottom" type="button">8</button>
                        <button class="key-bottom" type="button">9</button>
                        <button class="key-bottom" type="button">*</button>
                        <button class="key-bottom" type="button">4</button>
                        <button class="key-bottom" type="button">5</button>
                        <button class="key-bottom" type="button">6</button>
                        <button class="key-bottom" type="button">-</button>
                        <button class="key-bottom" type="button">1</button>
                        <button class="key-bottom" type="button">2</button>
                        <button class="key-bottom" type="button">3</button>
                        <button class="key-bottom" type="button">+</button>
                        <button class="key-bottom" type="button">0</button>
                        <button class="key-bottom" type="button">,</button>
                        <button class="key-bottom equal" type="button">=</button>
                    </div>
                </ul>
            </div>
        </div>

        <div class="history">
            <h3>Histórico</h3>
            
            <div class="history-section">
                <ul class="history-list">
                    <li class="history-item">
                        <h4>4 + 5</h4>
                        <h4 class="result">9</h4>
                    </li>

                    <li class="history-item">
                        <h4>4 + 5</h4>
                        <h4 class="result">9</h4>
                    </li>

                    <li class="history-item">
                        <h4>4 + 5</h4>
                        <h4 class="result">9</h4>
                    </li>

                    <li class="history-item">
                        <h4>4 + 5</h4>
                        <h4 class="result">9</h4>
                    </li>
                </ul>
            </div>
            
        </div>
    </div>
</template>

<script lang="ts">

export default {
    name: 'Standart',
};
</script>

<style lang="scss">
    @import "../assets/scss/global.scss";

    .container {
        display: grid;
        grid-template-columns: 1fr 3.5fr 1fr;
        width: 100vw;
        height: 100vh;
        background-color: $background-color;

        .navbar {
            height: 100%;

            .logo-container {
                width: 100%;
                height: 20%;
                background: $background-color-gradient;
                @include centralizeContent();

                img {
                    width: 80%;
                }
            }

            nav {
                height: 80%;

                .nav-item {
                    width: 100%;
                    height: 15%;
                    transition-duration: 300ms;
                    @include centralizeContent();

                    &:hover {
                        filter: brightness(1.2);
                        transition-duration: 300ms;
                    }

                    .nav-item-content {
                        display: flex;
                        justify-content: center;

                        img {
                            width: 15%;
                            margin-right: 10%;
                        }

                        h5 {
                            color: white;
                            font-size: 2vw;
                            font-weight: 100;
                        }
                    }
                }

                .active {
                    background-color: $item-color;
                }
            }
        }

        .input {
            height: 100%;

            .input-display {
                height: 20%;

                #display {
                    width: 100%;
                    height: 100%;
                    padding: 2%;
                    background-color: transparent;
                    border: 0;
                    outline: none;
                    color: white;
                    font-size: 3vw;
                    text-align: right;
                }
            }

            .input-keyboard {
                width: 100%;
                height: 80%;
                background-color: $item-color;
                border: 1px solid $background-color;

                .keyboard-list {
                    width: 100%;
                    height: 100%;

                    .keyboard-items-top {
                        display: flex;
                        justify-content: flex-end;
                        width: 100%;
                        height: 8%;

                        .top-key {
                            width: 12.5%;
                            height: 100%;
                            border: 0;
                            transition-duration: 300ms;
                            border: 1px solid $background-color;

                            &:hover {
                                cursor: pointer;
                                filter: brightness(1.2);
                                transition-duration: 300ms;
                            }

                            &:active {
                                background-color: white;
                            }
                        }

                        .delete {
                            background-color: $primary-color;

                            img {
                                height: 45%;
                            }
                        }

                        .clear {
                            background-color: $secundary-color;
                            color: white;
                            font-size: 1.5vw;
                        }
                    }

                    .keyboard-items-bottom {
                        width: 100%;
                        height: 92%;
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        grid-template-rows: repeat(6, 1fr);
                        
                        .key-bottom {
                            background-color: $item-color;
                            border: 1px solid $background-color;
                            color: white;
                            font-size: 2vw;

                            &:hover {
                                cursor: pointer;
                                filter: brightness(1.2);
                                transition-duration: 300ms;
                            }

                            &:active {
                                background-color: white;
                            }
                        }

                        .equal {
                            background: $background-color-gradient;
                        }
                    }
                }
            }
        }

        .history {
            width: 100%;
            height: 100%;

            h3 {
                width: 100%;
                height: 20%;
                @include centralizeContent();
                font-size: 2vw;
                color: white;
                font-weight: 400;
            }

            .history-section {
                width: 100%;
                height: 80%;

                .history-list {
                    width: 100%;
                    max-height: 50%;
                    overflow-y: scroll;

                    &::-webkit-scrollbar {
                        width: 5px;
                        border-radius: 20px;
                        background-color: rgba(255, 255, 255, 0.267);
                    }

                    &::-webkit-scrollbar-thumb {
                        border-radius: 20px;
                        background-color: $primary-color;
                    }
                    
                    .history-item {
                        width: 100%;
                        height: 15%;
                        text-align: right;
                        padding: 10%;
                        
                        h4 {
                            color: white;
                            font-size: 1.5vw;
                            font-weight: 100;
                        }

                        .result {
                            color: yellow;
                        }
                    }
                }
            }
        }
    }
</style>