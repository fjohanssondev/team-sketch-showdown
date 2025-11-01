import { Canvas as FabricCanvas } from "fabric"
import { useEffect, useRef, useState } from "react";

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [canvas, setCanvas] = useState<FabricCanvas | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const fabricCanvas = new FabricCanvas(canvasRef.current, {
        width: containerRef.current?.clientWidth,
        height: containerRef.current?.clientHeight,
        backgroundColor: 'white',
        selectionBorderColor: 'blue',
        selectionColor: 'rgba(0, 0, 255, 0.1)',
      });

      fabricCanvas.renderAll();
      setCanvas(fabricCanvas);

      return () => {
        fabricCanvas.dispose();
      };
    }
  }, []);

  return (
    <div ref={containerRef} className="h-screen w-full">
      <canvas ref={canvasRef} />
    </div>
  )
}