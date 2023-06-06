export default function AskButton() {
        const buttonStyle = {
            backgroundColor: "#1C2541",
           
          }

    return (
      <div className="flex flex-col items-center justify-center p-0">
        <button className="bg-custom-blue text-white px-4 py-2 rounded-lg" style={buttonStyle}>
          Ask A Question?
        </button>
      </div>
    );
  }
  
