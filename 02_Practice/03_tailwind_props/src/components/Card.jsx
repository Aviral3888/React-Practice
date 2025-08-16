import React, { StrictMode } from 'react'

const Card = ({username = "AG", role = "Student", place="Home", cardImageSrc, onUpdateUsername }) => {
    
    /*
    NOTE:
    Props are immutable inside children,

    yet [username = "Updated Username"] will work, because I'm trying to update the local variable value and not the parents prop value. 
    Although that is done by passing the value as a state and a callback which updates the state from parent to child.
    */
    // username = "Updated Username";
    
    /*
    Updating the username using the callback()
    In this approach - the child asks the parent if it can change the username by calling the onUpdateUsername callback method and the parent updates the value of the username.

    This is the canonical React pattern:
	•	Data flows down → Parent passes state as props.
	•	Events flow up → Child calls parent’s callback to request changes.

    This keeps React’s unidirectional data flow intact and avoids the unpredictability of two-way binding.
    */
    const handleChange = () => {
        onUpdateUsername("Update from child");
    }
    
    return (
        <>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 dark:bg-slate-800 mb-3">
                <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={cardImageSrc} alt="" width="384" height="512" />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        <p className="text-lg">
                            “Tailwind CSS is the only framework that I've seen scale
                            on large teams. It's easy to customize, adapts to any design,
                            and the build size is tiny.”
                        </p>
                    </blockquote>
                    <figcaption>
                        <div>
                            {username}
                        </div>
                        <div>
                            {role}, {place}
                        </div>
                    </figcaption>
                    <button onClick={handleChange}>Update Username</button>
                </div>
            </figure>
        </>
    )
}

export default Card
