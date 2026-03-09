// components/PostcodeForm.tsx
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
  postcode: z.string().min(2, 'Please enter a valid postcode'),
})

export function PostcodeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Handle submission (e.g., send to API)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          placeholder="e.g. SW1A 1AA"
          {...register('postcode')}
          className="h-12"
        />
        {errors.postcode && (
          <p className="text-sm text-red-500 mt-1">{errors.postcode.message}</p>
        )}
      </div>
      <Button type="submit" size="lg" className="w-full">
        SUBMIT
      </Button>
    </form>
  )
}