// HTML5 Canvas Parchment Scripture Card Generator for WhatsApp, Telegram, iMessage, and Socials

export async function generateParchmentCard(quoteText, citation = 'Holy Scripture') {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1080;
    const ctx = canvas.getContext('2d');

    // 1. Parchment Background Gradient
    const bgGradient = ctx.createRadialGradient(540, 540, 80, 540, 540, 750);
    bgGradient.addColorStop(0, '#fdfaf3');
    bgGradient.addColorStop(0.7, '#f4ece0');
    bgGradient.addColorStop(1, '#e8dcce');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, 1080, 1080);

    // 2. Subtle Parchment Noise / Texture
    ctx.fillStyle = 'rgba(160, 130, 90, 0.03)';
    for (let i = 0; i < 60000; i++) {
      const rx = Math.random() * 1080;
      const ry = Math.random() * 1080;
      ctx.fillRect(rx, ry, 1.5, 1.5);
    }

    // 3. Ornate Double Borders (Gold & Vermilion)
    ctx.strokeStyle = '#c69214'; // Gold outer border
    ctx.lineWidth = 6;
    ctx.strokeRect(50, 50, 980, 980);

    ctx.strokeStyle = '#b93b2c'; // Vermilion inner border
    ctx.lineWidth = 2;
    ctx.strokeRect(66, 66, 948, 948);

    // 4. Corner Ornaments
    const drawCorner = (x, y, flipX, flipY) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(flipX ? -1 : 1, flipY ? -1 : 1);
      ctx.strokeStyle = '#c69214';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(30, 30, 20, Math.PI, 1.5 * Math.PI);
      ctx.stroke();
      ctx.fillStyle = '#b93b2c';
      ctx.beginPath();
      ctx.arc(30, 30, 4, 0, 2 * Math.PI);
      ctx.fill();
      ctx.restore();
    };

    drawCorner(66, 66, false, false);
    drawCorner(1014, 66, true, false);
    drawCorner(66, 1014, false, true);
    drawCorner(1014, 1014, true, true);

    // 5. Sacred Cross Header Emblem
    ctx.strokeStyle = '#c69214';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(540, 130);
    ctx.lineTo(540, 200);
    ctx.moveTo(515, 155);
    ctx.lineTo(565, 155);
    ctx.stroke();

    // 6. Header Title
    ctx.font = 'bold 32px Cinzel, Georgia, serif';
    ctx.fillStyle = '#b93b2c';
    ctx.textAlign = 'center';
    ctx.fillText('AURA SACRA', 540, 250);

    ctx.font = 'italic 20px "EB Garamond", Georgia, serif';
    ctx.fillStyle = '#6e6255';
    ctx.fillText('Verbum Domini Manet in Aeternum', 540, 285);

    // Subtle divider line
    ctx.strokeStyle = 'rgba(198, 146, 20, 0.4)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(340, 315);
    ctx.lineTo(740, 315);
    ctx.stroke();

    // 7. Scripture Text (Word Wrapped with adaptive multi-verse scaling)
    const maxWidth = 840;
    const maxHeight = 560; // Safe area between top header (y=340) and bottom seal (y=940)
    
    let fontSize = 40;
    let lineHeight = 56;
    let lines = [];

    // Iteratively decrease font size until the text block and citation fit comfortably
    while (fontSize >= 18) {
      ctx.font = `500 ${fontSize}px "EB Garamond", Georgia, serif`;
      lineHeight = Math.round(fontSize * 1.38);
      lines = [];
      
      const paragraphs = quoteText.split('\n');
      for (let p = 0; p < paragraphs.length; p++) {
        const words = paragraphs[p].split(/\s+/).filter(Boolean);
        let currentLine = '';
        for (let n = 0; n < words.length; n++) {
          const testLine = currentLine ? `${currentLine} ${words[n]}` : words[n];
          const metrics = ctx.measureText(testLine);
          if (metrics.width > maxWidth && currentLine) {
            lines.push(currentLine);
            currentLine = words[n];
          } else {
            currentLine = testLine;
          }
        }
        if (currentLine) {
          lines.push(currentLine);
        }
        if (p < paragraphs.length - 1 && paragraphs[p].trim() !== '') {
          lines.push('');
        }
      }

      const citationSpace = fontSize >= 28 ? 75 : 50;
      const totalBlockHeight = lines.length * lineHeight + citationSpace;
      if (totalBlockHeight <= maxHeight || fontSize <= 18) {
        break;
      }
      fontSize -= 2;
    }

    ctx.font = `500 ${fontSize}px "EB Garamond", Georgia, serif`;
    ctx.fillStyle = '#221a12';
    ctx.textAlign = 'center';

    const citationSpace = fontSize >= 28 ? 60 : 40;
    const totalBlockHeight = lines.length * lineHeight + citationSpace;
    const centerY = 620;
    const startY = Math.max(355, centerY - totalBlockHeight / 2 + lineHeight / 2);

    lines.forEach((l, index) => {
      if (l) {
        ctx.fillText(l.trim(), 540, startY + index * lineHeight);
      }
    });

    // 8. Scripture Citation
    const citFontSize = Math.max(20, Math.min(32, Math.round(fontSize * 0.85) + 4));
    ctx.font = `600 ${citFontSize}px Cinzel, Georgia, serif`;
    ctx.fillStyle = '#c69214';
    const citationY = Math.min(925, startY + lines.length * lineHeight + citationSpace);
    ctx.fillText(`— ${citation} —`, 540, citationY);

    // 9. Footer Seal
    ctx.font = '18px "EB Garamond", Georgia, serif';
    ctx.fillStyle = '#8a7c6d';
    ctx.fillText('Shared from Aura Sacra • Universal Christian Platform', 540, 960);

    canvas.toBlob((blob) => {
      resolve({ blob, dataUrl: canvas.toDataURL('image/png') });
    }, 'image/png');
  });
}

// Share or Download Parchment Card
export async function shareOrDownloadCard(quoteText, citation) {
  try {
    const { blob, dataUrl } = await generateParchmentCard(quoteText, citation);
    const fileName = `AuraSacra_${Date.now()}.png`;

    // Try Web Share API (native sheet for WhatsApp, Telegram, iMessage, etc.)
    if (navigator.canShare && navigator.canShare({ files: [new File([blob], fileName, { type: 'image/png' })] })) {
      const file = new File([blob], fileName, { type: 'image/png' });
      await navigator.share({
        title: 'Aura Sacra — Sacred Scripture',
        text: `"${quoteText}" — ${citation}`,
        files: [file]
      });
      return { success: true, method: 'share' };
    } else {
      // Fallback: Trigger direct image download
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      return { success: true, method: 'download' };
    }
  } catch (err) {
    console.error('Error sharing card:', err);
    return { success: false, error: err };
  }
}
