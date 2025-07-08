/**
 * Función helper para manejar animaciones ping-pong de sprites
 * @param {Object} sprite - Objeto con propiedades del sprite
 * @param {number} frameNumber - Número de frame actual del juego
 * @param {number} animationSpeed - Velocidad de animación (ej: 5, 8, 10)
 * @returns {Object} - Objeto con spriteX y spriteY actualizados
 */
export function updateSpriteAnimation(sprite, frameNumber, animationSpeed) {
  if (frameNumber % animationSpeed === 0) {
    // Mover el sprite en la dirección actual
    sprite.spriteCol += sprite.spriteDirection;
    
    // Verificar si llegamos a los límites y cambiar dirección
    if (sprite.spriteCol >= sprite.spriteColumns - 1) {
      sprite.spriteCol = sprite.spriteColumns - 1;
      sprite.spriteDirection = -1; // Cambiar a dirección hacia atrás
    } else if (sprite.spriteCol <= 0) {
      sprite.spriteCol = 0;
      sprite.spriteDirection = 1; // Cambiar a dirección hacia adelante
    }

    // Calcular posiciones del sprite
    sprite.spriteX = sprite.width * sprite.spriteCol;
    sprite.spriteY = sprite.height * sprite.spriteRow;
  }
  
  return {
    spriteX: sprite.spriteX,
    spriteY: sprite.spriteY
  };
} 