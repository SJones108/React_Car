import Input from "./Input";
import { useForm } from 'react-hook-form';
import { server_calls } from '../api/server';
import { useDispatch, useStore } from 'react-redux';
import { chooseMake, chooseModel, chooseYear, chooseColor, } from "../redux/slices/RootSlice"

// interfaces
interface CarFormProps {
  id?: string []
}

const CarForm = (props:CarFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  // function that handles form submission for adding or updating a car record.
  const onSubmit = (data: any, event: any) => {
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data);
      console.log(data)
      setTimeout(() => {
        window.location.reload(); 
      }, 1000);
      event.target.reset();
    } else {
    // Use dispatch to update the state in the store
   dispatch(chooseMake(data.car_make));
   dispatch(chooseModel(data.car_model));
   dispatch(chooseYear(data.car_year));
   dispatch(chooseColor(data.car_color));
      
      server_calls.create(store.getState());
      setTimeout(() => {window.location.reload()}, 500);
    }
  }
  return (  
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input {...register('car_make')} name='car_make' placeholder="Make"/>
        </div>
        <div>
          <Input {...register('car_model')} name='car_model' placeholder="Model"/>
        </div>
        <div>
          <Input {...register('car_year')} name='car_year' placeholder="Year"/>
        </div>
        <div>
          <Input {...register('car_color')} name='car_color' placeholder="Color"/>
        </div>
        <div className="flex p-1">
          <button
            className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
            >
              Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default CarForm