import { BoardButtonsManager } from './components/BoardButtonsManager.js';

document.addEventListener('DOMContentLoaded', () => {
  const viewport = document.getElementById('boardViewport');
  
  // Initialize the Edge Buttons Manager (search, add person, sort + bottom boundary line)
  const boardButtonsManager = new BoardButtonsManager({
    container: viewport
  });

  window.__nopitacBoardButtons = boardButtonsManager;
});
