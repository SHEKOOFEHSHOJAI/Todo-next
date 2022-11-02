import Input from '@material-ui/core/Input';

export default function MyInput({ type, name, required, readOnly, placeholder, id, onChange }) {
  return (
    <div>

          <Input type={type} readOnly={readOnly} placeholder={placeholder} required={required} name={name} id={id} onChange={onChange}
            
          />
    </div>
  )
}
