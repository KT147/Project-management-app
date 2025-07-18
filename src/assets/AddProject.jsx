import { forwardRef, useRef, useImperativeHandle } from "react";

function AddProject(props, ref){

  const newProjectRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef()

  useImperativeHandle(ref, () => {
    return {
      open() {
        newProjectRef.current.showModal();
      },
    };
  });

  const saveProject = () => {
    const newProject = {
    title: titleRef.current.value,
    description: descriptionRef.current.value,
    date: dateRef.current.value
    }
    props.onSave(newProject)
    newProjectRef.current.close()
    
    titleRef.current.value = ""
    descriptionRef.current.value = ""
    dateRef.current.value= ""
  }


  return (
    <dialog ref={newProjectRef}>
      <form method="dialog">
        <button>Close</button>
      </form>
      <button onClick={saveProject} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
        Save
      </button>
      <br />
      <br />
      <label className="text-sm font-bold uppercase text-stone-500">
        TITLE
      </label>
      <br />
      <input ref={titleRef}
        className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        type="text"
      />
      <br />
      <label className="text-sm font-bold uppercase text-stone-500">
        DESCRIPTION
      </label>
      <br />
      <input ref={descriptionRef}
        className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        type="text"
      />
      <br />
      <label className="text-sm font-bold uppercase text-stone-500">
        DUE DATE
      </label>
      <br />
      <input ref={dateRef}
        className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        type="date"
      />
      <br />
    </dialog>
  );
}

export default forwardRef(AddProject);

