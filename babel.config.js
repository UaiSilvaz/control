// babel é uma ferramenta de transpilação que converte código JavaScript moderno em uma versão mais antiga, garantindo compatibilidade com diferentes ambientes. O arquivo babel.config.js é onde você configura as opções do Babel para o seu projeto. No exemplo abaixo, estamos usando o preset "babel-preset-expo" para projetos Expo e adicionando o plugin "react-native-reanimated/plugin" para suporte a animações avançadas.

module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: ["react-native-reanimated/plugin"], 
    };
};