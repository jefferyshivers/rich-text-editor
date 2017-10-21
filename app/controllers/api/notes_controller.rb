class Api::NotesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]

  def create
    note = Note.new(user: params[:user_id], title: params[:title], body: params[:body])
    if note.save
      render_notes(note.user)
    else
      render json: { error: note.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def index
    render_notes(current_user)
  end

  private
  def render_notes(user)
    render json: { notes: user.notes.order(updated_at: :desc) }
  end
end