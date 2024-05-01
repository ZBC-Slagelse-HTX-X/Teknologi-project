import SkemaModule from "./skemaModule";


// Monday
const scheduleMon = [
    { subject: 'MA', teacher: 'jacs', room: 'SLWI-4110', key: 1, visibility: 'show', note: 'Plan: Potensfunktioner, eksponentiel vækst', homework: '03_opg_polynomier.ipynb' },
    { subject: 'MA', teacher: 'jacs', room: 'SLWI-4110', key: 2, visibility: 'show', note: '', homework: '' },
    { subject: 'Fy', teacher: 'hnpo', room: 'SLWI-4110', key: 3, visibility: 'show', note: 'Ingen lektier. Vi ser på hvad vi skal i timen. Forberedelse til SO2 i næste uge. we  we jwnkjnkjn kjnkjnkjn ', homework: '' },
    { subject: 'Fy', teacher: 'hnpo', room: 'SLWI-4110', key: 4, visibility: 'show', note: '', homework: '' },
    { subject: 'sa', teacher: 'mmje', room: 'SLWI-4110', key: 5, visibility: 'show', note: 'Det senmoderne samfunds kendetegn ', homework: '' },
    { subject: 'So', teacher: 'kibo', room: 'SLWI-4110', key: 6, visibility: 'show', note: '', homework: 'Hold øje med, hvordan du tager noter i de forskellige fag.' },
    { subject: '', teacher: '', room: '', key: 7, visibility: 'hide', note: '', homework: '' },
];

// Tuesday
const scheduleTue = [
    { subject: 'En2', teacher: 'mgja', room: 'SLWI-4110', key: 1, visibility: 'show', note: "Hello y'all, It's been a while since", homework: "Homework" },
    { subject: 'En2', teacher: 'mgja', room: 'SLWI-4110', key: 2, visibility: 'show', note: '', homework: '' },
    { subject: 'bi', teacher: 'bhjo', room: 'SLWI-4110', key: 3, visibility: 'show', note: '', homework: 'Læs afsnit Kunstig befrugtning.' },
    { subject: 'bi', teacher: 'bhjo', room: 'SLWI-4110', key: 4, visibility: 'show', note: '', homework: '' },
    { subject: 'sa', teacher: 'mmje', room: 'SLWI-4110', key: 5, visibility: 'show', note: 'Vi skal i undervisningen arbejde med famili', homework: '' },
    { subject: '', teacher: '', room: '', key: 6, visibility: 'hide', note: '', homework: '' },
    { subject: '', teacher: '', room: '', key: 7, visibility: 'hide', note: '', homework: '' },
];

// Wednesday
const scheduleWed = [
    { subject: 'Ke', teacher: 'pgra', room: 'SLWI-4110', key: 1, visibility: 'show', note: '', homework: 'qwe' },
    { subject: 'Ke', teacher: 'pgra', room: 'SLWI-4110', key: 2, visibility: 'show', note: '', homework: '' },
    { subject: 'MA', teacher: 'jacs', room: 'SLWI-4110', key: 3, visibility: 'show', note: 'qwe', homework: 'qwe' },
    { subject: 'MA', teacher: 'jacs', room: 'SLWI-4110', key: 4, visibility: 'show', note: '', homework: '' },
    { subject: 'Ti', teacher: 'hnpo', room: 'SLWI-4110', key: 5, visibility: 'show', note: '', homework: 'qwe' },
    { subject: 'Ti', teacher: 'hnpo', room: 'SLWI-4110', key: 6, visibility: 'show', note: '', homework: '' },
    { subject: '', teacher: '', room: '', key: 7, visibility: 'hide', note: '', homework: '' },
];

// Thursday
const scheduleThu = [
    { subject: 'Ti', teacher: 'hnpo', room: 'SLWI-4110', key: 1, visibility: 'show', note: '', homework: 'qwe' },
    { subject: 'Ti', teacher: 'hnpo', room: 'SLWI-4110', key: 2, visibility: 'show', note: '', homework: '' },
    { subject: 'DA', teacher: 'kibo', room: 'SLWI-4110', key: 3, visibility: 'show', note: '', homework: 'qwe' },
    { subject: 'DA', teacher: 'kibo', room: 'SLWI-4110', key: 4, visibility: 'show', note: '', homework: '' },
    { subject: '', teacher: '', room: '', key: 5, visibility: 'hide', note: '', homework: '' },
    { subject: '', teacher: '', room: '', key: 6, visibility: 'hide', note: '', homework: '' },
    { subject: '', teacher: '', room: '', key: 7, visibility: 'hide', note: '', homework: '' },
];

// Friday
const scheduleFri = [
    { subject: '', teacher: '', room: '', key: 1, visibility: 'hide', note: '', homework: ''  },
    { subject: 'En2', teacher: 'mgja', room: 'SLWI-4110', key: 2, visibility: 'show', note: '', homework: 'qwe' },
    { subject: 'kit', teacher: 'rety', room: 'SLWI-4110', key: 3, visibility: 'show', note: '', homework: '' },
    { subject: 'kit', teacher: 'rety', room: 'SLWI-4110', key: 4, visibility: 'show', note: '', homework: '' },
    { subject: 'Fy', teacher: 'hnpo', room: 'SLWI-4110', key: 5, visibility: 'show', note: '', homework: '' },
    { subject: '', teacher: '', room: '', key: 6, visibility: 'hide', note: '', homework: '' },
    { subject: '', teacher: '', room: '', key: 7, visibility: 'hide', note: '', homework: '' },
];



export default function skema() {
    const weekNumbers = ["29/4", "30/4", "1/5", "2/5", "3/5"];

    
    const today = new Date();
    const month = today.getMonth()+1;
    const year = today.getFullYear();
    const date = today.getDate();
    const currentDate = month + "/" + date + "/" + year;
    
    const weekDate = date + "/" + month;

    var currentWeekNumber = require('current-week-number');


    return (
        <div className="px-10">
            
            <div className="container">
                <div className="w-[80vw] h-[100vh] py-10">
                    <div className="w-full flex justify-center font-bold bg-white py-2">
                        <h1> Uge { currentWeekNumber(currentDate) } - { year }</h1>
                    </div>
                    <table className="w-full h-full bg-white">
                        <thead>
                            <tr className="h-20">
                                <th></th>
                                <th> 
                                { (() => {
                                        if (weekNumbers[0] == weekDate) {
                                            return (
                                                <span className="px-10 p-4 rounded-xl bg-[#1E90FF] text-white font-normal">Mandag <strong>{ weekNumbers[0] }</strong></span> 
                                            );
                                        } else {
                                            return (
                                                <span className="px-10 p-4 rounded-xl bg-slate-200 font-normal">Mandag <strong>{ weekNumbers[0] }</strong></span>
                                            );
                                        }

                                    })()}
                                </th>
                                <th> 
                                { (() => {
                                    if (weekNumbers[1] == weekDate) {
                                        return (
                                            <span className="px-10 p-4 rounded-xl bg-[#1E90FF] text-white font-normal">Tirsdag <strong>{ weekNumbers[1] }</strong></span> 
                                        );
                                    }   else {
                                        return (
                                            <span className="px-10 p-4 rounded-xl bg-slate-200 font-normal">Tirsdag <strong>{ weekNumbers[1] }</strong></span> 
                                        );
                                    }
                                }) ()}
                                </th>
                                <th> 
                                { (() => {
                                    if (weekNumbers[2] == weekDate) {
                                        return (
                                            <span className="px-10 p-4 rounded-xl bg-[#1E90FF] text-white font-normal">Onsdag <strong>{ weekNumbers[2] }</strong></span> 
                                        );
                                    }   else {
                                        return (
                                            <span className="px-10 p-4 rounded-xl bg-slate-200 font-normal">Onsdag <strong>{ weekNumbers[2] }</strong></span> 
                                        );
                                    }
                                }) ()}
                                </th>
                                <th> 
                                { (() => {
                                    if (weekNumbers[3] == weekDate) {
                                        return (
                                            <span className="px-10 p-4 rounded-xl bg-[#1E90FF] text-white font-normal">Torsdag <strong>{ weekNumbers[3] }</strong></span> 
                                        );
                                    }   else {
                                        return (
                                            <span className="px-10 p-4 rounded-xl bg-slate-200 font-normal">Torsdag <strong>{ weekNumbers[3] }</strong></span> 
                                        );
                                    }
                                }) ()}
                                </th>
                                <th> 
                                { (() => {
                                    if (weekNumbers[4] == weekDate) {
                                        return (
                                            <span className="px-10 p-4 rounded-xl bg-[#1E90FF] text-white font-normal">Fredag <strong>{ weekNumbers[4] }</strong></span> 
                                        );
                                    }   else {
                                        return (
                                            <span className="px-10 p-4 rounded-xl bg-slate-200 font-normal">Fredag <strong>{ weekNumbers[4] }</strong></span> 
                                        );
                                    }
                                }) ()}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {/* Module 1 */}
                            <tr>
                             <td> <span className="h-[50px] bg-slate-300 py-10 px-2 rounded-e-md text-slate-600 font-bold">1.</span> </td>
                                <td><SkemaModule subject={scheduleMon[0].subject} teacher={scheduleMon[0].teacher} room={scheduleMon[0].room} visibility={scheduleMon[0].visibility} note={scheduleMon[0].note} homework={scheduleMon[0].homework} /></td>
                                <td><SkemaModule subject={scheduleTue[0].subject} teacher={scheduleTue[0].teacher} room={scheduleMon[0].room} visibility={scheduleTue[0].visibility} note={scheduleTue[0].note} homework={scheduleTue[0].homework} /></td>
                                <td><SkemaModule subject={scheduleWed[0].subject} teacher={scheduleWed[0].teacher} room={scheduleWed[0].room} visibility={scheduleWed[0].visibility} note={scheduleWed[0].note} homework={scheduleWed[0].homework} /></td>
                                <td><SkemaModule subject={scheduleThu[0].subject} teacher={scheduleThu[0].teacher} room={scheduleThu[0].room} visibility={scheduleThu[0].visibility} note={scheduleThu[0].note} homework={scheduleThu[0].homework} /></td>
                                <td><SkemaModule subject={scheduleFri[0].subject} teacher={scheduleFri[0].teacher} room={scheduleFri[0].room} visibility={scheduleFri[0].visibility} note={scheduleFri[0].note} homework={scheduleFri[0].homework} /></td>
                            </tr>

                            {/* Module 2 */}
                            <tr className="m-2">
                                <td> <span className="h-[50px] bg-slate-300 py-10 px-2 rounded-e-md text-slate-600 font-bold">2.</span> </td>
                                <td><SkemaModule subject={scheduleMon[1].subject} teacher={scheduleMon[1].teacher} room={scheduleMon[1].room} visibility={scheduleMon[1].visibility} note={scheduleMon[1].note} homework={scheduleMon[1].homework} /></td>
                                <td><SkemaModule subject={scheduleTue[1].subject} teacher={scheduleTue[1].teacher} room={scheduleTue[1].room} visibility={scheduleTue[1].visibility} note={scheduleTue[1].note} homework={scheduleTue[1].homework} /></td>
                                <td><SkemaModule subject={scheduleWed[1].subject} teacher={scheduleWed[1].teacher} room={scheduleWed[1].room} visibility={scheduleWed[1].visibility} note={scheduleWed[1].note} homework={scheduleWed[1].homework} /></td>
                                <td><SkemaModule subject={scheduleThu[1].subject} teacher={scheduleThu[1].teacher} room={scheduleThu[1].room} visibility={scheduleThu[1].visibility} note={scheduleThu[1].note} homework={scheduleThu[1].homework} /></td>
                                <td><SkemaModule subject={scheduleFri[1].subject} teacher={scheduleFri[1].teacher} room={scheduleFri[1].room} visibility={scheduleFri[1].visibility} note={scheduleFri[1].note} homework={scheduleFri[1].homework} /></td>
                            </tr>
                            
                            {/* Module 3 */}
                            <tr>
                            <td> <span className="h-[50px] bg-slate-300 py-10 px-2 rounded-e-md text-slate-600 font-bold">3.</span> </td>
                                <td><SkemaModule subject={scheduleMon[2].subject} teacher={scheduleMon[2].teacher} room={scheduleMon[2].room} visibility={scheduleMon[2].visibility} note={scheduleMon[2].note} homework={scheduleMon[2].homework} /></td>
                                <td><SkemaModule subject={scheduleTue[2].subject} teacher={scheduleTue[2].teacher} room={scheduleTue[2].room} visibility={scheduleTue[2].visibility} note={scheduleTue[2].note} homework={scheduleTue[2].homework} /></td>
                                <td><SkemaModule subject={scheduleWed[2].subject} teacher={scheduleWed[2].teacher} room={scheduleWed[2].room} visibility={scheduleWed[2].visibility} note={scheduleWed[2].note} homework={scheduleWed[2].homework} /></td>
                                <td><SkemaModule subject={scheduleThu[2].subject} teacher={scheduleThu[2].teacher} room={scheduleThu[2].room} visibility={scheduleThu[2].visibility} note={scheduleThu[2].note} homework={scheduleThu[2].homework} /></td>
                                <td><SkemaModule subject={scheduleFri[2].subject} teacher={scheduleFri[2].teacher} room={scheduleFri[2].room} visibility={scheduleFri[2].visibility} note={scheduleFri[2].note} homework={scheduleFri[2].homework} /></td>
                            </tr>
                            
                            {/* Module 4 */}
                            <tr>
                            <td> <span className="h-[50px] bg-slate-300 py-10 px-2 rounded-e-md text-slate-600 font-bold">4.</span> </td>
                                <td><SkemaModule subject={scheduleMon[3].subject} teacher={scheduleMon[3].teacher} room={scheduleMon[3].room} visibility={scheduleMon[3].visibility} note={scheduleMon[3].note} homework={scheduleMon[3].homework} /></td>
                                <td><SkemaModule subject={scheduleTue[3].subject} teacher={scheduleTue[3].teacher} room={scheduleTue[3].room} visibility={scheduleTue[3].visibility} note={scheduleTue[3].note} homework={scheduleTue[3].homework} /></td>
                                <td><SkemaModule subject={scheduleWed[3].subject} teacher={scheduleWed[3].teacher} room={scheduleWed[3].room} visibility={scheduleWed[3].visibility} note={scheduleWed[3].note} homework={scheduleWed[3].homework} /></td>
                                <td><SkemaModule subject={scheduleThu[3].subject} teacher={scheduleThu[3].teacher} room={scheduleThu[3].room} visibility={scheduleThu[3].visibility} note={scheduleThu[3].note} homework={scheduleThu[3].homework} /></td>
                                <td><SkemaModule subject={scheduleFri[3].subject} teacher={scheduleFri[3].teacher} room={scheduleFri[3].room} visibility={scheduleFri[3].visibility} note={scheduleFri[3].note} homework={scheduleFri[3].homework} /></td>
                            </tr>
                            
                            {/* Module 5 */}
                            <tr>
                            <td> <span className="h-[50px] bg-slate-300 py-10 px-2 rounded-e-md text-slate-600 font-bold">5.</span> </td>
                                <td><SkemaModule subject={scheduleMon[4].subject} teacher={scheduleMon[4].teacher} room={scheduleMon[4].room} visibility={scheduleMon[3].visibility} note={scheduleMon[3].note} homework={scheduleMon[3].homework} /></td>
                                <td><SkemaModule subject={scheduleTue[4].subject} teacher={scheduleTue[4].teacher} room={scheduleTue[4].room} visibility={scheduleTue[4].visibility} note={scheduleTue[3].note} homework={scheduleMon[3].homework} /></td>
                                <td><SkemaModule subject={scheduleWed[4].subject} teacher={scheduleWed[4].teacher} room={scheduleWed[4].room} visibility={scheduleWed[4].visibility} note={scheduleWed[3].note} homework={scheduleTue[3].homework} /></td>
                                <td><SkemaModule subject={scheduleThu[4].subject} teacher={scheduleThu[4].teacher} room={scheduleThu[4].room} visibility={scheduleThu[4].visibility} note={scheduleThu[3].note} homework={scheduleWed[3].homework} /></td>
                                <td><SkemaModule subject={scheduleFri[4].subject} teacher={scheduleFri[4].teacher} room={scheduleFri[4].room} visibility={scheduleFri[4].visibility} note={scheduleFri[3].note} homework={scheduleFri[3].homework} /></td>
                            </tr>
                            
                            {/* Module 6 */}
                            <tr>
                            <td> <span className="h-[50px] bg-slate-300 py-10 px-2 rounded-e-md text-slate-600 font-bold">6.</span> </td>
                                <td><SkemaModule subject={scheduleMon[5].subject} teacher={scheduleMon[5].teacher} room={scheduleMon[5].room} visibility={scheduleMon[5].visibility} note={scheduleMon[5].note} homework={scheduleMon[5].homework} /></td>
                                <td><SkemaModule subject={scheduleTue[5].subject} teacher={scheduleTue[5].teacher} room={scheduleTue[5].room} visibility={scheduleTue[5].visibility} note={scheduleTue[5].note} homework={scheduleTue[5].homework} /></td>
                                <td><SkemaModule subject={scheduleWed[5].subject} teacher={scheduleWed[5].teacher} room={scheduleWed[5].room} visibility={scheduleWed[5].visibility} note={scheduleWed[5].note} homework={scheduleWed[5].homework} /></td>
                                <td><SkemaModule subject={scheduleThu[5].subject} teacher={scheduleThu[5].teacher} room={scheduleThu[5].room} visibility={scheduleThu[5].visibility} note={scheduleThu[5].note} homework={scheduleThu[5].homework} /></td>
                                <td><SkemaModule subject={scheduleFri[5].subject} teacher={scheduleFri[5].teacher} room={scheduleFri[5].room} visibility={scheduleFri[5].visibility} note={scheduleFri[5].note} homework={scheduleFri[5].homework} /></td>
                            </tr>

                            {/* Module 7 */}
                            <tr>
                            <td> <span className="h-[50px] bg-slate-300 py-10 px-2 rounded-e-md text-slate-600 font-bold">7.</span> </td>
                                <td><SkemaModule subject={scheduleMon[6].subject} teacher={scheduleMon[6].teacher} room={scheduleMon[6].room} visibility={scheduleMon[6].visibility} note={scheduleMon[6].note} homework={scheduleMon[6].homework} /></td>
                                <td><SkemaModule subject={scheduleTue[6].subject} teacher={scheduleTue[6].teacher} room={scheduleTue[6].room} visibility={scheduleTue[6].visibility} note={scheduleTue[6].note} homework={scheduleTue[6].homework} /></td>
                                <td><SkemaModule subject={scheduleWed[6].subject} teacher={scheduleWed[6].teacher} room={scheduleWed[6].room} visibility={scheduleWed[6].visibility} note={scheduleWed[6].note} homework={scheduleWed[6].homework} /></td>
                                <td><SkemaModule subject={scheduleThu[6].subject} teacher={scheduleThu[6].teacher} room={scheduleThu[6].room} visibility={scheduleThu[6].visibility} note={scheduleThu[6].note} homework={scheduleThu[6].homework} /></td>
                                <td><SkemaModule subject={scheduleFri[6].subject} teacher={scheduleFri[6].teacher} room={scheduleFri[6].room} visibility={scheduleFri[6].visibility} note={scheduleFri[6].note} homework={scheduleFri[6].homework} /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}