import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "../../Elements/Input";
import InputLabel from "../../Elements/InputLabel";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const InputFragment = (props) => {
    const {name,placeholder,type,accept,className,children,onChange,value,disabled} = props;

    return (
        <div className={className}>
            { type === 'file' ? (
                <>
                    <InputLabel name={name} className={'text-xs mx-3'}>
                        {children}
                    </InputLabel>
                    <InputLabel
                        className="w-full text-center bg-search-bar text-xs rounded-lg overflow-hidden p-2 mt-1 
                                    flex justify-end gap-5"
                    >   
                        {accept.includes(".pdf") ? (
                            <p>Choose File</p>
                        ) : (
                            <p>Choose Image</p>
                        )}
                        <FontAwesomeIcon icon={faFile} className="w-5 h-5 inline-block"/>
                        <Input 
                            name={name}
                            value={value}
                            className="hidden"
                            type={type}
                            accept={accept}
                            onChange={onChange}
                            disabled={disabled}
                            />
                    </InputLabel>

                </>
            ) :  (
                <>
                    <InputLabel name={name} className={'text-xs mx-3'}>{children}</InputLabel>
                    <Input 
                        type={type} 
                        id={name}
                        name={name} 
                        value={value}
                        placeholder={placeholder} 
                        className="w-full text-center bg-search-bar text-xs rounded-lg overflow-hidden p-2 mt-1"
                        onChange={onChange}
                        disabled={disabled}
                    />
                </>
            )}
        </div>
    )
}

export default InputFragment;