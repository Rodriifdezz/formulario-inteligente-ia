import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useState } from "react"
import axios from "axios"
import { motion, AnimatePresence } from "framer-motion"

const schema = z.object({
  type: z.enum(["cliente", "proveedor", "colaborador"]),
  name: z.string().min(1),
  email: z.string().email(),
  extra1: z.string().min(1),
  extra2: z.string().optional(),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres")
})

export default function DynamicForm() {
  const [userType, setUserType] = useState("cliente")
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { type: "cliente" }
  })

  const onSubmit = async (data) => {
    try {
      await axios.post("https://n8n.srv879896.hstgr.cloud/webhook-test/formulario-inteligente", data)
      alert("Formulario enviado correctamente")
    } catch (err) {
      console.error(err)
      alert("Error al enviar")
    }
  }

  const fieldVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-xl space-y-5 border border-gray-200"
    >
      <div className="space-y-2">
        <label className="font-semibold">Tipo de usuario</label>
        <select
          {...register("type")}
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          className="w-full p-3 border rounded-md"
        >
          <option value="cliente">Cliente</option>
          <option value="proveedor">Proveedor</option>
          <option value="colaborador">Colaborador</option>
        </select>
      </div>

      <input {...register("name")} placeholder="Nombre" className="w-full p-3 border rounded-md" />
      {errors.name && <p className="text-red-500 text-sm">Nombre requerido</p>}

      <input {...register("email")} placeholder="Email" className="w-full p-3 border rounded-md" />
      {errors.email && <p className="text-red-500 text-sm">Email inválido</p>}

      <AnimatePresence mode="wait">
        {userType === "cliente" && (
          <motion.div key="cliente" {...fieldVariants} initial="initial" animate="animate" exit="exit" className="space-y-2">
            <input {...register("extra1")} placeholder="Empresa" className="w-full p-3 border rounded-md" />
            <input {...register("extra2")} placeholder="Necesidades" className="w-full p-3 border rounded-md" />
          </motion.div>
        )}
        {userType === "proveedor" && (
          <motion.div key="proveedor" {...fieldVariants} initial="initial" animate="animate" exit="exit" className="space-y-2">
            <input {...register("extra1")} placeholder="Servicio" className="w-full p-3 border rounded-md" />
            <input {...register("extra2")} placeholder="Presupuesto" className="w-full p-3 border rounded-md" />
          </motion.div>
        )}
        {userType === "colaborador" && (
          <motion.div key="colaborador" {...fieldVariants} initial="initial" animate="animate" exit="exit" className="space-y-2">
            <input {...register("extra1")} placeholder="Rol" className="w-full p-3 border rounded-md" />
            <input {...register("extra2")} placeholder="URL Portafolio" className="w-full p-3 border rounded-md" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="space-y-2">
        <label className="font-semibold">Mensaje</label>
        <textarea
          {...register("mensaje")}
          placeholder="Escribe aquí tu consulta, interés o proyecto..."
          rows={5}
          className="w-full p-3 border rounded-md"
        />
        {errors.mensaje && <p className="text-red-500 text-sm">{errors.mensaje.message}</p>}
      </div>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold p-3 rounded-lg transition-all hover:bg-blue-700 shadow"
      >
        Enviar
      </motion.button>
    </motion.form>
  )
}
